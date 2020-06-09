// src/Modules/Command/Commands/AppSelectCommand.ts
import { BaseComamnd, CommandType } from '../BaseCommand';

/**
 * Select the given application.
 * https://developers.google.com/assistant/smarthome/traits/appselector#action.devices.commands.appselect
 */
export class AppSelectCommand extends BaseComamnd {
  public type = CommandType.appSelect as const;

  /**
   * Key of the application to select.
   */
  public newApplication: string;

  /**
   * Name of the application to select.
   */
  public newApplicationName: string;
}
