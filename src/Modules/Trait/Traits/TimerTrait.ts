// src/Modules/Trait/Traits/TimerTrait.ts
import { BaseTrait } from '../BaseTrait';
import { TraitType } from '../TraitType';
import { BrightnessAbsoluteCommand } from '../../Command/Commands/BrightnessAbsoluteCommand';

/**
 * https://developers.google.com/assistant/smarthome/traits/timer#device-attributes
 */
interface Attributes {
  /**
   * Indicates the longest timer setting in seconds available on the device.
   */
  maxTimerLimitSec: number;

  /**
   * Indicates if the device supports using one-way (true) or two-way (false) communication.
   * Set this attribute to true if the device cannot respond to a QUERY intent or Report State for this trait.
   * @default false
   */
  commandOnlyTimer: boolean;
}

/**
 * The Timer trait represents a timer on a device, primarily kitchen appliances
 * such as ovens and microwaves, but not limited to them. For instance,
 * a smart sprinkler controller or smart light switch may have a built-in timer.
 * This trait can be used to control a built-in timer on devices,
 * such as starting a new timer as well as pausing and canceling a running timer, and asking how much time is remaining.
 * https://developers.google.com/assistant/smarthome/traits/timer
 */
export class TimerTrait extends BaseTrait {
  public type = TraitType.Timer;

  public attributes: Attributes;

  public commands = [new BrightnessAbsoluteCommand()] as const;

  /**
   * Current time remaining in seconds, -1 or [0, maxTimerLimitSec]. Set to -1 to indicate no timer is running.
   */
  public timerRemainingSec: number;

  /**
   *  True if a running timer exists but is currently paused.
   */
  public timerPaused: boolean;
}
