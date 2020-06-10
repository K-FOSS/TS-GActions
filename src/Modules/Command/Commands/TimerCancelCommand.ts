// src/Modules/Command/Commands/TimerCancelCommand.ts
import { BaseComamnd, CommandType } from '../BaseCommand';

/**
 * Stop and delete the currently running or paused timer.
 * https://developers.google.com/assistant/smarthome/traits/timer#device-commands
 */
export class TimerCancelCommand extends BaseComamnd {
  public type = CommandType.TimerCancel as const;
}
