// src/Lab/Devices/CoreLight/index.ts
import { CommandType } from '@k-foss/ts-gactions/Modules/Command/BaseCommand';
import {
  AppSelectorTrait,
  BrightnessTrait,
  OnOffTrait,
} from '@k-foss/ts-gactions/Modules/Trait';
import { BaseDevice } from '../../../Modules/Device/BaseDevice';
import { DeviceType } from '../../../Modules/Device/Device';
import { DeviceInfo } from '../../../Modules/Device/DeviceInfo';

interface CustomData {
  brightness: number;

  on: boolean;
}

export class CoreLight extends BaseDevice<CoreLight['traits']> {
  public id = '544845';

  public deviceInfo: DeviceInfo = {
    hwVersion: '0.0.0',
    manufacturer: 'KJDev',
    model: '0.0.1',
    swVersion: '0.0.1',
  };

  public name: BaseDevice<CoreLight['traits']>['name'] = {
    name: 'Core Light',
    defaultNames: ['test'],
    nicknames: ['test'],
  };

  public type = DeviceType.Light;

  public customData: CustomData = {
    brightness: 50,
    on: false,
  };

  public attributes: BaseDevice<CoreLight['traits']>['attributes'] = {
    commandOnlyOnOff: false,
    commandOnlyBrightness: false,
    queryOnlyOnOff: false,
    availableApplications: [
      {
        key: 'youtube',
        names: [
          {
            name_synonym: ['Youtube', 'YouTube US'],
            lang: 'en',
          },
          {
            name_synonym: ['Youtube', 'YouTube DE'],
            lang: 'de',
          },
        ],
      },
    ],
  };

  public willReportState = true;

  public traits = [
    new OnOffTrait(),
    new BrightnessTrait(),
    new AppSelectorTrait(),
  ] as const;

  public getStatus: BaseDevice<CoreLight['traits']>['getStatus'] = async () => {
    return {
      ...this.customData,
      currentApplication: '',
    };
  };

  public executeCommand: BaseDevice<
    CoreLight['traits']
  >['executeCommand'] = async (command) => {
    switch (command.type) {
      case CommandType.BrightnessAbsolute:
        this.customData.brightness = command.brightness;
        break;
      case CommandType.OnOff:
        this.customData.on = command.on;
        break;
      case CommandType.appInstall:
        console.log('Install Application ', command);
        break;
      case CommandType.appSelect:
        console.log('Select application: ', command);
    }
  };
}
