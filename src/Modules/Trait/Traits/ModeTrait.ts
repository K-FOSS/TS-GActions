/* eslint-disable camelcase */
// src/Modules/Trait/Traits/ModeTrait.ts
import { BaseTrait } from '../BaseTrait';
import { TraitType } from '../TraitType';
import { SetModesCommand } from '../../Command/Commands/SetModesCommand';

interface Name {
  /**
   * User-friendly names for the mode, in each language supported.
   */
  name_synonym: string[];

  /**
   * Supported language for the names (see Supported Languages/Language Codes).
   */
  lang: string;
}

interface ModeSettingsValue {
  setting_synonym: string[];

  lang: string;
}

interface ModeSettings {
  setting_name: string;

  setting_values: ModeSettingsValue[];
}

interface Mode {
  /**
   * Internal name of the mode, which will be used in commands and states. This can be non-user-friendly, and will be shared across all languages.
   */
  name: string;

  /**
   * Contains names and supported languages
   */
  name_values: Name[];

  /**
   * Contains setting names and supported languages
   */
  settings: ModeSettings[];

  ordered: boolean;
}

/**
 * https://developers.google.com/assistant/smarthome/traits/modes#device-attributes
 */
interface Attributes {
  availableModes: Mode[];

  /**
   * Indicates if the device or sensor can only be queried for state information and
   * cannot be controlled. Set this attribute to true if the device can only respond to QUERY intents and cannot respond to EXECUTE intents.
   * @default false
   */
  commandOnlyModes?: boolean;
}

/**
 *  The basic on and off functionality for any device that has binary on and off,
 * including plugs and switches as well as many future devices. Note that thermostats have an expanded "mode" setting,
 * which is a multiway switch that includes on and off, but thermostats generally will not have this trait.
 * https://developers.google.com/assistant/smarthome/traits/onoff
 */
export class ModesTrait extends BaseTrait {
  public type = TraitType.Modes;

  public attributes: Attributes;

  public commands = [new SetModesCommand()] as const;

  /**
   * Whether a device with an on/off switch is on or off.
   */
  public currentModeSettings: Record<string, unknown>;
}
