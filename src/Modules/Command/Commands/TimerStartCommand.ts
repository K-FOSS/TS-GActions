// src/Modules/Command/Commands/TimerStartCommand.ts
import { BaseComamnd, CommandType } from '../BaseCommand';

/**
 * Start a new timer.
 *
 * https://developers.google.com/assistant/smarthome/traits/timer#device-commands
 */
export class TimerStartCommand extends BaseComamnd {
  public type = CommandType.TimerStart as const;

  /**
   * Positive integer. Required. In seconds [1, maxTimerLimitSec].
   */
  public timerTimeSec: number;
}
