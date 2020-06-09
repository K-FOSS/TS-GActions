// src/Modules/Trait/Traits/BrightnessTrait.ts
import { BaseTrait } from '../BaseTrait';
import { TraitType } from '../TraitType';
import { BrightnessAbsoluteCommand } from '../../Command/Commands/BrightnessAbsoluteCommand';

interface Attributes {
  /**
   * Indicates if the device supports using one-way (true) or two-way (false) communication.
   * Set this attribute to true if the device cannot respond to a QUERY intent or Report State for this trait.
   * @default false
   */
  commandOnlyBrightness?: boolean;
}

/**
 *  This trait covers how to control the brightness of a device.
 * Absolute brightness setting is in a normalized range
 * from 0 to 100 (individual lights may not support every point in the range based on their LED configuration).
 * https://developers.google.com/assistant/smarthome/traits/brightness
 */
export class BrightnessTrait extends BaseTrait {
  public type = TraitType.Brightness;

  public attributes: Attributes;

  public commands = [new BrightnessAbsoluteCommand()] as const;

  /**
   *  Current brightness level. Ideally, this is the number that was set
   * versus the rounded point (for example, if the user sets it to 65%,
   * but the device has to round to 10% increments, ideally this would still return 65%).
   */
  public brightness: number;
}
