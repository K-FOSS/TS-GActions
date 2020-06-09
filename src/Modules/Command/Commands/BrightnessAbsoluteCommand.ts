// src/Modules/Command/Commands/BrightnessAbsoluteCommand.ts
import { BaseComamnd, CommandType } from '../BaseCommand';

/**
 *
 * https://developers.google.com/assistant/smarthome/traits/brightness#device-commands
 */
export class BrightnessAbsoluteCommand extends BaseComamnd {
  public type = CommandType.BrightnessAbsolute as const;

  /**
   * New absolute brightness, from 0 to 100.
   */
  public brightness: number;
}
