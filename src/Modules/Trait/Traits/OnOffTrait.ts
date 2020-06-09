// src/Modules/Trait/Traits/OnOffTrait.ts
import { BaseTrait } from '../BaseTrait';
import { TraitType } from '../TraitType';
import { OnOffCommand } from '../../Command/Commands/OnOffCommand';

export class OnOffTrait extends BaseTrait {
  public type = TraitType.OnOff;

  public commands = [new OnOffCommand()] as const;

  public on: true | false;
}
