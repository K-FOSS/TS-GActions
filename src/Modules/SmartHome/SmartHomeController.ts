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
} from 'actions-on-google';
import type {
  BuiltinFrameworkMetadata,
  Headers,
} from 'actions-on-google/dist/framework';
import { BaseDevice } from '../Device';
import { Traits } from '../Trait/TraitClass';

interface CreateControllerOptions<T> {
  devices: T;
}

export class SmartHomeController<
  T extends BaseDevice<ReadonlyArray<Traits>>[]
> {
  public devices: T;

  public smartHome: AppHandler & SmartHomeApp;

  public static async createController<T extends BaseDevice<Traits[]>[]>({
    devices,
  }: CreateControllerOptions<T>): Promise<SmartHomeController<T>> {
    const smartHome = smarthome();

    const smartHomeController = new SmartHomeController<T>();
    smartHomeController.smartHome = smartHome;
    smartHomeController.devices = devices;

    smartHome.onSync((...args) => smartHomeController.onSync(...args));
    smartHome.onExecute((...args) => smartHomeController.onExecute(...args));
    smartHome.onQuery((...args) => smartHomeController.onQuery(...args));

    return smartHomeController;
  }

  public async onExecute(
    body: SmartHomeV1ExecuteRequest,
    headers: Headers,
    framework?: BuiltinFrameworkMetadata,
  ): Promise<SmartHomeV1ExecuteResponse> {
    const commands = await Promise.all(
      body.inputs.flatMap((execInput) => {
        return execInput.payload.commands.flatMap(({ devices, execution }) => {
          return devices.flatMap<Promise<SmartHomeV1ExecuteResponseCommands>>(
            async ({ id }) => {
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

                await localDevice.executeCommand(deviceCommand);
                break;
              }

              return {
                ids: [id],
                status: 'SUCCESS',
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
    const devicePromises = body.inputs.flatMap(({ intent, payload }) =>
      payload.devices.map(async ({ id }) => {
        const localDevice = this.devices.find((device) => device.id === id);
        if (!localDevice) {
          return [];
        }

        return [id, await localDevice.getStatus()] as [string, unknown];
      }),
    );

    return {
      requestId: body.requestId,
      payload: {
        devices: Object.fromEntries(await Promise.all(devicePromises)),
      },
    };
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
          willReportState: true,
        };
      },
    );

    return {
      requestId: body.requestId,
      payload: {
        devices,
      },
    };
  }
}
