// src/Modules/Command/Commands/AppInstallCommand.ts
import { BaseComamnd, CommandType } from '../BaseCommand';

/**
 * Install the given application.
 * https://developers.google.com/assistant/smarthome/traits/appselector#action.devices.commands.appinstall
 */
export class AppInstallCommand extends BaseComamnd {
  public type = CommandType.appInstall as const;

  /**
   * Key of the application to install.
   */
  public newApplication: string;

  /**
   * Name of the application to install.
   */
  public newApplicationName: string;
}
