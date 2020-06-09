// src/Modules/Command/Command.ts
import { OnOffCommand } from './Commands/OnOffCommand';
import { BrightnessAbsoluteCommand } from './Commands/BrightnessAbsoluteCommand';
import { AppInstallCommand } from './Commands/AppInstallCommand';
import { AppSelectCommand } from './Commands/AppSelectCommand';

export type Commands =
  | OnOffCommand
  | BrightnessAbsoluteCommand
  | AppInstallCommand
  | AppSelectCommand;
