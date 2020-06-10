// src/Modules/Command/Commands/TimerAdjustCommand.ts
import { BaseComamnd, CommandType } from '../BaseCommand';

/**
 * Adjust a running timer.
 * https://developers.google.com/assistant/smarthome/traits/timer#device-commands
 */
export class TimerAdjustCommand extends BaseComamnd {
  public type = CommandType.TimerAdjust as const;

  /**
   * Positive or negative integer in seconds [-maxTimerLimitSec, maxTimerLimitSec].
   * Agent may return valueOutOfRange error if remaining seconds is smaller than the
   * absolute value of the specified timerTimeSec. For instance, agent may return a
   * valueOutOfRange error if remaining seconds is 20 but timerTimeSec is -30.
   */
  public timerTimeSec: number;
}
