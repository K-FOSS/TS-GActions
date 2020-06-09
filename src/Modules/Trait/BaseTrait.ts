// src/Modules/Trait/BaseTrait.ts
import { TraitType } from './TraitType';
import { Commands } from '../Command/Commands';
import { ArrayType } from '@k-foss/ts-gactions/Utils/types';
import { BrightnessTrait } from './Traits/BrightnessTrait';
import { OnOffTrait } from './Traits/OnOffTrait';
import { AppSelectorTrait } from './Traits/AppSelectorTrait';

export abstract class BaseTrait {
  public abstract commands: ReadonlyArray<Commands>;

  public abstract attributes: {};

  public abstract type: TraitType;
}
