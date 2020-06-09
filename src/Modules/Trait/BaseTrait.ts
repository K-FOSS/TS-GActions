// src/Modules/Trait/BaseTrait.ts
import { TraitType } from './TraitType';
import { Command } from '../Command/Command';

export abstract class BaseTrait {
  public abstract commands: ReadonlyArray<Command>;

  public abstract type: TraitType;
}
