// src/Modules/Device/Device.test.ts
import { TestSuite } from '@k-foss/ts-estests';
import { OnOffTrait, BrightnessTrait } from '../Trait';
import { BaseDevice } from './BaseDevice';
import { DeviceType } from './Device';

export class DeviceTest extends TestSuite {
  public testName = 'Device Test Suite';

  public async test<T, T2>(): Promise<void> {
    class HelloWorld implements BaseDevice<HelloWorld['traits']> {
      public id = 55;

      public type = DeviceType.LIGHT;

      public traits = [new OnOffTrait(), new BrightnessTrait()];

      public getStatus: BaseDevice<
        HelloWorld['traits']
      >['getStatus'] = async () => {
        return {
          brightness: 50,
          on: true,
        };
      };
    }
  }
}
