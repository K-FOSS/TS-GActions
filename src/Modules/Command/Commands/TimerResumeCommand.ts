// src/Modules/Command/Commands/TimerResumeCommand.ts
import { BaseComamnd, CommandType } from '../BaseCommand';

/**
 * Resume the currently paused timer.
 * https://developers.google.com/assistant/smarthome/traits/timer#device-commands
 */
export class TimerResumeCommand extends BaseComamnd {
  public type = CommandType.TimerResume as const;
}
