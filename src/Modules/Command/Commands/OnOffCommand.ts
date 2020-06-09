// src/Modules/Commands/Commands/OnOffCommand.ts
import { BaseComamnd } from '../BaseCommand';

export class OnOffCommand extends BaseComamnd {
  public type = 'action.devices.commands.OnOff' as const;

  public on = true;
}
