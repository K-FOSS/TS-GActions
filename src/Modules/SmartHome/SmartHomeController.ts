// src/Modules/SmartHome/SmartHomeController.ts
import {
  AppHandler,
  smarthome,
  SmartHomeApp,
  SmartHomeV1ExecuteRequest,
  SmartHomeV1ExecuteResponse,
  SmartHomeV1ExecuteResponseCommands,
  SmartHomeV1QueryRequest,
  SmartHomeV1QueryResponse,
  SmartHomeV1SyncDevices,
  SmartHomeV1SyncRequest,
  SmartHomeV1SyncResponse,
  SmartHomeV1DisconnectResponse,
  SmartHomeV1DisconnectRequest,
  SmartHomeJwt,
} from 'actions-on-google';
import type {
  BuiltinFrameworkMetadata,
  Headers,
} from 'actions-on-google/dist/framework';
import { BaseDevice } from '../Device';
import { Traits } from '../Trait';

interface CreateControllerOptions<T> {
  devices: T;
}

export class SmartHomeController<
  T extends ReadonlyArray<BaseDevice<Traits[]>>
> {
  public devices: T;

  public smartHome: AppHandler & SmartHomeApp;

  public static async createController<
    T extends ReadonlyArray<BaseDevice<any>>
  >({ devices }: CreateControllerOptions<T>): Promise<SmartHomeController<T>> {
    let jwt: SmartHomeJwt | undefined;

    if (process.env.JWT_PATH) {
      jwt = (await import(process.env.JWT_PATH)).default;
    }

    const smartHome = smarthome({
      key: process.env.KEY,
      jwt,
      debug: true,
    });

    const smartHomeController = new SmartHomeController<T>();
    smartHomeController.smartHome = smartHome;
    smartHomeController.devices = devices;

    smartHome.onSync((...args) => smartHomeController.onSync(...args));
    smartHome.onExecute((...args) => smartHomeController.onExecute(...args));
    smartHome.onQuery((...args) => smartHomeController.onQuery(...args));
    smartHome.onDisconnect((...args) =>
      smartHomeController.onDisconnect(...args),
    );

    setInterval(async () => {
      const data = await smartHomeController.getDeviceStatus();

      smartHomeController.smartHome.reportState({
        requestId: Math.random().toString(),
        agentUserId: '544845',
        payload: {
          devices: {
            states: Object.fromEntries(data),
          },
        },
      });
    }, 5000);

    return smartHomeController;
  }

  public async getDeviceStatus(
    deviceIds?: string[],
  ): Promise<[string, unknown][]> {
    let devices: SmartHomeController<T>['devices'];

    if (deviceIds) {
      devices = deviceIds.flatMap((deviceId) => {
        const localDevice = this.devices.find(
          (device) => device.id === deviceId,
        );
        if (!localDevice) {
          return [];
        }

        return localDevice;
      });
    } else {
      devices = this.devices;
    }

    return Promise.all(
      devices.map<Promise<[string, unknown]>>(async (localDevice) => [
        localDevice.id,
        await localDevice.getStatus(),
      ]),
    );
  }

  public async onExecute(
    body: SmartHomeV1ExecuteRequest,
    headers: Headers,
    framework?: BuiltinFrameworkMetadata,
  ): Promise<SmartHomeV1ExecuteResponse> {
    console.log('onExec: ', body.inputs[0].payload.commands[0], headers);

    const commands = await Promise.all(
      body.inputs.flatMap((execInput) => {
        return execInput.payload.commands.flatMap(({ devices, execution }) => {
          return devices.flatMap<Promise<SmartHomeV1ExecuteResponseCommands>>(
            async ({ id }) => {
              let states = {};

              const localDevice = this.devices.find(
                (device) => device.id === id,
              );
              if (!localDevice) {
                return {
                  ids: [id],
                  status: 'ERROR',
                  errorCode: 'DEVICE_NOT_FOUND',
                };
              }

              const commands = localDevice.traits
                .map(({ commands }) => commands)
                .flat(1);

              for (const deviceCommand of commands) {
                const exec = execution.find(
                  ({ command }) => deviceCommand.type === command,
                );
                if (!exec) {
                  continue;
                }

                Object.assign(deviceCommand, exec.params);

                states = await localDevice.executeCommand(deviceCommand);
                break;
              }

              return {
                ids: [id],
                status: 'SUCCESS',
                states,
              };
            },
          );
        });
      }),
    );

    return {
      requestId: body.requestId,
      payload: {
        commands,
      },
    };
  }

  public async onQuery(
    body: SmartHomeV1QueryRequest,
    headers: Headers,
    framework?: BuiltinFrameworkMetadata,
  ): Promise<SmartHomeV1QueryResponse> {
    console.log('onQuery', body);

    return {
      requestId: body.requestId,
      payload: {
        devices: Object.fromEntries(await this.getDeviceStatus()),
      },
    };
  }

  public async onDisconnect(
    body: SmartHomeV1DisconnectRequest,
    headers: Headers,
    framework?: BuiltinFrameworkMetadata,
  ): Promise<SmartHomeV1DisconnectResponse> {
    console.log(
      'onDisconnect: body: ',
      body,
      `headers: `,
      headers,
      'framework: ',
      framework,
    );

    return {};
  }

  public async onSync(
    body: SmartHomeV1SyncRequest,
    headers: Headers,
    framework?: BuiltinFrameworkMetadata,
  ): Promise<SmartHomeV1SyncResponse> {
    const devices = this.devices.map<SmartHomeV1SyncDevices>(
      ({ getStatus, traits, ...device }) => {
        return {
          ...device,
          traits: traits.map(({ type }) => type),
        };
      },
    );

    return {
      requestId: body.requestId,
      payload: {
        agentUserId: '544845',
        devices,
      },
    };
  }
}
