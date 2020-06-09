// src/Modules/Trait/Traits/BrightnessTrait.ts
import { BaseTrait } from '../BaseTrait';
import { TraitType } from '../TraitType';
import { BrightnessAbsoluteCommand } from '../../Command/Commands/BrightnessAbsoluteCommand';

export class BrightnessTrait extends BaseTrait {
  public type = TraitType.Brightness as const;

  public commands = [new BrightnessAbsoluteCommand()] as const;

  public brightness: number;
}
