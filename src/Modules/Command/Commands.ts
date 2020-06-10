// src/Modules/Command/Command.ts
import { OnOffCommand } from './Commands/OnOffCommand';
import { BrightnessAbsoluteCommand } from './Commands/BrightnessAbsoluteCommand';
import { AppInstallCommand } from './Commands/AppInstallCommand';
import { AppSelectCommand } from './Commands/AppSelectCommand';
import { TimerStartCommand } from './Commands/TimerStartCommand';
import { TimerPauseCommand } from './Commands/TimerPauseCommand';
import { TimerResumeCommand } from './Commands/TimerResumeCommand';
import { TimerCancelCommand } from './Commands/TimerCancelCommand';
import { SetModesCommand } from './Commands/SetModesCommand';
import { TimerAdjustCommand } from './Commands/TimerAdjustCommand';

export type Commands =
  | OnOffCommand
  | BrightnessAbsoluteCommand
  | AppInstallCommand
  | AppSelectCommand
  | TimerStartCommand
  | TimerPauseCommand
  | TimerResumeCommand
  | TimerCancelCommand
  | TimerAdjustCommand
  | SetModesCommand;
