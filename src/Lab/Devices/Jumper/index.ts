// src/Lab/Devices/Jumper/index.ts
import { BaseDevice } from '../../../Modules/Device/BaseDevice';
import { DeviceType } from '../../../Modules/Device/Device';
import { DeviceInfo } from '../../../Modules/Device/DeviceInfo';
import { TimerTrait } from '@k-foss/ts-gactions/Modules/Trait/Traits/TimerTrait';
import { CommandType } from '@k-foss/ts-gactions/Modules/Command/BaseCommand';
import { ModesTrait } from '@k-foss/ts-gactions/Modules/Trait/Traits/ModeTrait';
import { OnOffTrait } from '@k-foss/ts-gactions/Modules/Trait';

interface CustomData {
  timer?: NodeJS.Timeout;
  timerPaused: boolean;

  timerRemainingSec: number;

  modeSetting: ObjectGet<Record<string, unknown>>;

  on: boolean;
}

export class Jumper extends BaseDevice<Jumper['traits']> {
  public id = '123';

  public deviceInfo: DeviceInfo = {
    hwVersion: '0.0.1',
    manufacturer: 'KJDev',
    model: '0.0.1',
    swVersion: '0.0.1',
  };

  public willReportState = true;

  public name: BaseDevice<Jumper['traits']>['name'] = {
    name: 'Jumper',
    defaultNames: ['Jumper'],
    nicknames: ['Jumper'],
  };

  public type = DeviceType.Switch;

  public attributes: BaseDevice<Jumper['traits']>['attributes'] = {
    availableModes: [
      {
        name: 'range',
        name_values: [
          {
            name_synonym: ['Distance'],
            lang: 'en',
          },
        ],
        settings: [
          {
            setting_name: '1h',
            setting_values: [
              {
                setting_synonym: ['1 Hour', '1', '1h'],
                lang: 'en',
              },
            ],
          },
          {
            setting_name: '2h',
            setting_values: [
              {
                setting_synonym: ['2 Hours', '2 hour', '2', '2h'],
                lang: 'en',
              },
            ],
          },
        ],
        ordered: true,
      },
    ],
    commandOnlyTimer: false,
    maxTimerLimitSec: 60000,
    commandOnlyModes: false,
    commandOnlyOnOff: false,
    queryOnlyOnOff: false,
  };

  public traits = [
    new TimerTrait(),
    new ModesTrait(),
    new OnOffTrait(),
  ] as const;

  public customData: CustomData = {
    timerPaused: false,
    timer: undefined,
    timerRemainingSec: -1,
    modeSetting: {
      distance: '1h',
    },
    on: false,
  };

  public startInterval(): void {
    this.customData.timer = setInterval(() => {
      this.customData.timerRemainingSec -= 1;

      if (this.customData.timerRemainingSec <= -1) {
        if (!this.customData.timer) {
          return;
        }

        clearInterval(this.customData.timer);
      }
    }, 1000);
  }

  public startTimer(timerTimeSec: number): void {
    this.customData.timerRemainingSec = timerTimeSec;
    this.customData.timerPaused = false;

    this.startInterval();
  }

  public stopTimer(): void {
    if (!this.customData.timer) {
      return;
    }

    clearInterval(this.customData.timer);
    this.customData.timerPaused = false;
  }

  public pauseTimer(): void {
    console.log('pause timer: ', this.customData);

    if (!this.customData.timer) {
      return;
    }

    clearInterval(this.customData.timer);
    this.customData.timerPaused = true;
  }

  public getStatus: BaseDevice<Jumper['traits']>['getStatus'] = async () => {
    return {
      timerPaused: this.customData.timerPaused,
      timerRemainingSec: this.customData.timerRemainingSec,
      currentModeSettings: this.customData.modeSetting,
      on: this.customData.on,
    };
  };

  public executeCommand: BaseDevice<
    Jumper['traits']
  >['executeCommand'] = async (command) => {
    switch (command.type) {
      case CommandType.TimerStart:
        console.log('Start Timer: ', command);
        this.startTimer(command.timerTimeSec);
        break;
      case CommandType.TimerCancel:
        this.stopTimer();
        break;
      case CommandType.TimerPause:
        console.log('pause timer: ');
        this.pauseTimer();
        break;
      case CommandType.TimerResume:
        this.startInterval();
        this.customData.timerPaused = false;
        break;
      case CommandType.TimerAdjust:
        break;
      case CommandType.SetMode:
        this.customData.modeSetting = command.updateModeSettings;
        break;
      case CommandType.OnOff:
        this.customData.on = command.on;
        break;
      // case CommandType.Locate:
      //   console.log('Locate Shit', command);
      //   break;
    }

    const states = await this.getStatus();

    return states;
  };
}
