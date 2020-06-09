// src/Modules/SmartHome/SmartHomeController.test.ts
import { TestSuite } from '@k-foss/ts-estests';
import { SmartHomeController } from './SmartHomeController';
import { BaseDevice } from '../Device';
import { DeviceType } from '../Device/Device';
import { OnOffTrait, BrightnessTrait } from '../Trait';
import {} from 'actions-on-google';

class CoreLight implements BaseDevice<CoreLight['traits']> {
  public id = '544845';

  public name: BaseDevice<CoreLight['traits']>['name'] = {
    name: 'Core Light',
    defaultNames: ['test'],
    nicknames: ['test'],
  };

  public type = DeviceType.LIGHT;

  public traits = [new OnOffTrait(), new BrightnessTrait()];

  public getStatus: BaseDevice<CoreLight['traits']>['getStatus'] = async () => {
    return {
      brightness: 50,
      on: true,
    };
  };
}

export class SmartHomeControllerSuite extends TestSuite {
  public testName = 'Smart Home Controller Suite';

  public async test(): Promise<void> {
    const smartHomeController = await SmartHomeController.createController({
      devices: [new CoreLight()],
    });

    console.log(
      smartHomeController.onSync(
        {
          inputs: [],
          requestId: '544845',
        },
        {},
      ),
    );
  }
}
