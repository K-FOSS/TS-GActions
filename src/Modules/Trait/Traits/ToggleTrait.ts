// src/Modules/Trait/Traits/ToggleTrait.ts
import { BaseTrait } from '../BaseTrait';
import { TraitType } from '../TraitType';
import { Name } from '@k-foss/ts-gactions/Modules/Language/Name';
import { SetTogglesCommand } from '../../Command/Commands/SetTogglesCommand';

/**
 * https://developers.google.com/assistant/smarthome/traits/toggles#device-attributes
 */
interface Attributes {
  availableToggles: Name[];

  /**
   * Indicates if the device supports using one-way (true) or two-way (false) communication.
   * Set this attribute to true if the device cannot respond to a QUERY intent or Report State for this trait.
   *
   * @default false
   */
  commandOnlyToggles: boolean;
}

/**
 * This trait belongs to any devices with settings that can only exist in one of two states. In other words,
 * this trait covers all available custom binary settings on a device. These settings can represent a physical
 * button with an on/off or active/inactive state, a checkbox in HTML, or any other sort of specifically
 * enabled/disabled element. If the setting has more than two states, or has a state in which neither of the
 * binary options is selected, it is better represented as a Modes trait, which equates to multi-state dials,
 * radio buttons (physical or HTML), or binary states that are not explicitly on/off (for example, "AM/FM" or "hot/cold").
 *
 * This trait covers one or more individual toggles which users can set. In general, these toggles should be used for
 * functionality that is unlinked from other device behavior. Linked behavior, such as turning the device itself on or off,
 * should use more specific traits (for example, the thermostatMode in the trait TemperatureSetting).
 *
 * https://developers.google.com/assistant/smarthome/traits/toggles
 */
export class ToggleTrait extends BaseTrait {
  public type = TraitType.Toggles;

  public attributes: Attributes;

  public commands = [new SetTogglesCommand()] as const;

  /**
   * Whether a device with an on/off switch is on or off.
   */
  public currentToggleSettings: Record<string, boolean>;
}
