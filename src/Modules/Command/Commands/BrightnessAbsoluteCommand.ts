// src/Modules/Command/Commands/BrightnessAbsoluteCommand.ts
import { BaseComamnd } from '../BaseCommand';

export class BrightnessAbsoluteCommand extends BaseComamnd {
  public type = 'action.devices.commands.BrightnessAbsolute' as const;

  public brightness: number;
}
