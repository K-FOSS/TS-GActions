// src/Lab/Devices/CoreLight/index.ts
import { BaseDevice } from '../../../Modules/Device/BaseDevice';
import { DeviceType } from '../../../Modules/Device/Device';
import {
  OnOffTrait,
  BrightnessTrait,
  AppSelectorTrait,
} from '@k-foss/ts-gactions/Modules/Trait';
import { DeviceInfo } from '../../../Modules/Device/DeviceInfo';
import { CommandType } from '@k-foss/ts-gactions/Modules/Command/BaseCommand';
import { Application } from '@k-foss/ts-gactions/Modules/Trait/Traits/AppSelectorTrait';

let onStatus = true;
let brightness = 50;
const availableApplications: Application[] = [
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
];

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

  public type = DeviceType.LIGHT;

  public attributes = {
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

  public traits = [
    new OnOffTrait(),
    new BrightnessTrait(),
    new AppSelectorTrait(),
  ] as const;

  public getStatus: BaseDevice<CoreLight['traits']>['getStatus'] = async () => {
    return {
      on: onStatus,
      brightness,
      currentApplication: '',

      attributes: {
        availableApplications,
        commandOnlyBrightness: false,
        commandOnlyOnOff: false,
      },
      /*
      attributes: {
        commandOnlyBrightness: true,
        commandOnlyOnOff: false,
      },  */
    };
  };

  public executeCommand: BaseDevice<
    CoreLight['traits']
  >['executeCommand'] = async (command) => {
    switch (command.type) {
      case CommandType.BrightnessAbsolute:
        console.log('Brightness', command);
        brightness = command.brightness;
        break;
      case CommandType.OnOff:
        console.log('OnOff: ', command);
        onStatus = command.on;
        break;
      case CommandType.appInstall:
        console.log('Install Application ', command);
        break;
      case CommandType.appSelect:
        console.log('Select application: ', command);
    }
  };
}
