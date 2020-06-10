// src/Modules/Command/Commands/TimerPauseCommand.ts
import { BaseComamnd, CommandType } from '../BaseCommand';

/**
 * Pause the currently running timer.
 * https://developers.google.com/assistant/smarthome/traits/timer#device-commands
 */
export class TimerPauseCommand extends BaseComamnd {
  public type = CommandType.TimerPause as const;
}
