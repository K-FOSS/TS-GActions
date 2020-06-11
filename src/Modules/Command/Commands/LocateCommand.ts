// src/Modules/Command/Commands/TimerStartCommand.ts
import { BaseComamnd, CommandType } from '../BaseCommand';

/**
 * Locate the Device
 *
 * https://developers.google.com/assistant/smarthome/traits/locator#device-commands
 */
export class LocateCommand extends BaseComamnd {
  public type = CommandType.Locate as const;

  /**
   * For use on devices that make an audible response on Locate and report information. If set to true, should silence an already in-progress alarm if one is occurring.
   */
  public silence: boolean;

  /**
   * Default is "en". Current language of query/display,
   * for return of localized location strings if needed
   */
  public lang: string;
}
