// src/Modules/Trait/Traits/LocatorTrait.ts
import { BaseTrait } from '../BaseTrait';
import { TraitType } from '../TraitType';
import { LocateCommand } from '../../Command/Commands/LocateCommand';

interface Attributes {}

/**
 * This trait is used for devices that can be "found". This includes phones, robots
 * (including vacuums and mowers), drones, and tag-specific products that attach to other devices.
 * Devices can be found via a local indicator (for example, beeping, ringing, flashing or shrieking).
 * Requests to Find my [device] result in the device attempting to indicate its location.
 *
 * https://developers.google.com/assistant/smarthome/traits/locator
 */
export class LocatorTrait extends BaseTrait {
  public type = TraitType.Locator;

  public attributes: Attributes;

  public commands = [new LocateCommand()] as const;

  /**
   * Set to true if an alert (audible or visible) was successfully generated on the device.
   */
  public generatedAlert?: boolean;
}
