// src/Modules/Trait/Traits/RunCycleTrait.ts
import { BaseTrait } from '../BaseTrait';
import { TraitType } from '../TraitType';

/**
 * https://developers.google.com/assistant/smarthome/traits/runcycle#device-states
 */
interface RunCycle {
  /**
   * Current cycle being performed; object of strings, keyed by language.
   */
  currentCycle: string;

  /**
   * Optional. Next cycle to perform; object of strings, keyed by language.
   */
  nextCycle: string;

  /**
   * Language code for the cycles above
   * https://developers.google.com/assistant/smarthome/traits
   */
  lang: string;
}

/**
 * This trait reports the current status or state of a specific device or a connected group of devices. A group of devices
 * could be a security system. A specific device can report its current status as well as the status of any individual sensors
 * connected to that device. Individual sensors may use this trait, along with SensorState and the query-only versions of other
 * traits (such as OpenClose, HumiditySetting, TemperatureControl, and TemperatureSetting).
 * StatusReport serves as an aggregation for reporting collective status, but does not replace individual addressing,
 * as any device that can be reported to the Google Assistant should be queryable by the Assistant.
 * https://developers.google.com/assistant/smarthome/traits/brightness
 */
export class RunCycleTrait extends BaseTrait {
  public type = TraitType.RunCycle;

  public attributes: {};

  public commands = [] as const;

  /**
   * Contains the current status of the device and status of any individual sensors of that device.
   */
  public currentRunCycle: RunCycle[];

  /**
   * 	Integer representing time remaining on operation, in seconds.
   */
  public currentTotalRemainingTime: number;

  /**
   * Integer representing time remaining on current cycle, in seconds.
   */
  public currentCycleRemainingTime: number;
}
