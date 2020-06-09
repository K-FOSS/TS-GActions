// src/Modules/Command/Command.ts
import { OnOffCommand } from './Commands/OnOffCommand';
import { BrightnessAbsoluteCommand } from './Commands/BrightnessAbsoluteCommand';

export type Command = OnOffCommand | BrightnessAbsoluteCommand;
