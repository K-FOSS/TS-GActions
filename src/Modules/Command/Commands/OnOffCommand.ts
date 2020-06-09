// src/Modules/Commands/Commands/OnOffCommand.ts
import { BaseComamnd, CommandType } from '../BaseCommand';

/**
 *
 * https://developers.google.com/assistant/smarthome/traits/onoff#device-commands
 */
export class OnOffCommand extends BaseComamnd {
  public type = CommandType.OnOff as const;

  /**
   * Whether to turn the device on or off.
   */
  public on: boolean;
}
