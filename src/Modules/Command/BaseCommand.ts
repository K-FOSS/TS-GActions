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
}

export abstract class BaseComamnd {
  public abstract type: CommandType;
}
