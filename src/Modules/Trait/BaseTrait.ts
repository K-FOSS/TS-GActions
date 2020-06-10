// src/Modules/Trait/BaseTrait.ts
import { TraitType } from './TraitType';
import { Commands } from '../Command/Commands';

export abstract class BaseTrait {
  public abstract commands: ReadonlyArray<Commands>;

  public abstract attributes: {};

  public abstract type: TraitType;
}
