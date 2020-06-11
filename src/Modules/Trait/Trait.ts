// src/Modules/Trait/Trait.ts
import { OnOffTrait } from '@k-foss/ts-gactions/Modules/Trait/Traits/OnOffTrait';
import { BrightnessTrait } from '@k-foss/ts-gactions/Modules/Trait/Traits/BrightnessTrait';
import { AppSelectorTrait } from './Traits/AppSelectorTrait';
import { StatusReportTrait } from './Traits/StatusReportTrait';
import { RunCycleTrait } from './Traits/RunCycleTrait';
import { TimerTrait } from './Traits/TimerTrait';
import { ModesTrait } from './Traits/ModeTrait';
import { SensorStateTrait } from './Traits/SensorStateTrait';
import { LocatorTrait } from './Traits/LocatorTrait';

export type Traits =
  | OnOffTrait
  | BrightnessTrait
  | AppSelectorTrait
  | StatusReportTrait
  | SensorStateTrait
  | RunCycleTrait
  | TimerTrait
  | ModesTrait
  | LocatorTrait;
