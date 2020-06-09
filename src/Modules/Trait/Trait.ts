// src/Modules/Trait/Trait.ts
import { OnOffTrait } from '@k-foss/ts-gactions/Modules/Trait/Traits/OnOffTrait';
import { BrightnessTrait } from '@k-foss/ts-gactions/Modules/Trait/Traits/BrightnessTrait';
import { AppSelectorTrait } from './Traits/AppSelectorTrait';

export type Traits = OnOffTrait | BrightnessTrait | AppSelectorTrait;
