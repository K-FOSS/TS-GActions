// src/Modules/Trait/Traits/OnOffTrait.ts
import { BaseTrait } from '../BaseTrait';
import { TraitType } from '../TraitType';
import { OnOffCommand } from '../../Command/Commands/OnOffCommand';

/**
 * https://developers.google.com/assistant/smarthome/traits/onoff#device-attributes
 */
interface Attributes {
  /**
   *  Indicates if the device supports using one-way (true) or two-way (false) communication.
   * Set this attribute to true if the device cannot respond to a QUERY intent or Report State for this trait.
   *
   *
   * @default false
   */
  commandOnlyOnOff: boolean;

  /**
   * Indicates if the device or sensor can only be queried for state information and
   * cannot be controlled. Set this attribute to true if the device can only respond to QUERY intents and cannot respond to EXECUTE intents.
   * @default false
   */
  queryOnlyOnOff?: boolean;
}

/**
 *  The basic on and off functionality for any device that has binary on and off,
 * including plugs and switches as well as many future devices. Note that thermostats have an expanded "mode" setting,
 * which is a multiway switch that includes on and off, but thermostats generally will not have this trait.
 * https://developers.google.com/assistant/smarthome/traits/onoff
 */
export class OnOffTrait extends BaseTrait {
  public type = TraitType.OnOff;

  public attributes: Attributes;

  public commands = [new OnOffCommand()] as const;

  /**
   * Whether a device with an on/off switch is on or off.
   */
  public on: boolean;
}
