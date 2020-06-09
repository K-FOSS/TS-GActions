// src/Lab/Devices/CoreLight/index.ts
import { BaseDevice } from '../../../Modules/Device/BaseDevice';
import { DeviceType } from '../../../Modules/Device/Device';
import { OnOffTrait, BrightnessTrait } from '../../../Modules/Trait';
import { DeviceInfo } from '../../../Modules/Device/DeviceInfo';

let onStatus = true;
let brightness = 50;

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

  public traits = [new OnOffTrait(), new BrightnessTrait()] as const;

  public getStatus: BaseDevice<CoreLight['traits']>['getStatus'] = async () => {
    return {
      on: onStatus,
      brightness,
    };
  };

  public executeCommand: BaseDevice<
    CoreLight['traits']
  >['executeCommand'] = async (command) => {
    switch (command.type) {
      case 'action.devices.commands.BrightnessAbsolute':
        brightness = command.brightness;
        break;
      case 'action.devices.commands.OnOff':
        onStatus = command.on;
    }
  };
}
