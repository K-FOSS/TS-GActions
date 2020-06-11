// src/Modules/Command/Command.ts

export enum CommandType {
  OnOff = 'action.devices.commands.OnOff',
  BrightnessAbsolute = 'action.devices.commands.BrightnessAbsolute',

  /**
   * https://developers.google.com/assistant/smarthome/traits/appselector#action.devices.commands.appinstall
   */
  appInstall = 'action.devices.commands.appInstall',
  appSearch = 'action.devices.commands.appSearch',
  appSelect = 'action.devices.commands.appSelect',

  /**
   * https://developers.google.com/assistant/smarthome/traits/timer#device-commands
   */
  TimerStart = 'action.devices.commands.TimerStart',
  TimerAdjust = 'action.devices.commands.TimerAdjust',
  TimerPause = 'action.devices.commands.TimerPause',
  TimerResume = 'action.devices.commands.TimerResume',
  TimerCancel = 'action.devices.commands.TimerCancel',

  /**
   * https://developers.google.com/assistant/smarthome/traits/modes#device-commands
   */
  SetMode = 'action.devices.commands.SetModes',

  /**
   * https://developers.google.com/assistant/smarthome/traits/locator#device-commands
   */
  Locate = 'action.devices.commands.Locate',
}

export abstract class BaseComamnd {
  public abstract type: CommandType;
}
