// src/Modules/Trait/Traits/SensorStateTrait.ts
import { BaseTrait } from '../BaseTrait';
import { TraitType } from '../TraitType';

/**
 * Contains the current status of the device and status of any individual senso
 * https://developers.google.com/assistant/smarthome/traits/statusreport#device-states
 */
interface StatusReport {
  /**
   * If the issue/current status is blocking an action (for example, can’t arm the security system or the vacuum can’t run).
   */
  blocking: boolean;

  /**
   * The ID of the target device
   */
  deviceTarget: string;

  /**
   * Specifies the importance of this status.
   * The lower the value, the higher the priority, with the highest priority being 0.
   * The statuses are read to the user from highest to lowest priority. Depending on the surface, only high priority exceptions may be read out.
   */
  priority: number;

  /**
   * The current status of the sensor.
   * https://developers.google.com/assistant/smarthome/reference/errors-exceptions
   */
  statusCode: string;
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
export class SensorStateTrait extends BaseTrait {
  public type = TraitType.SensorState;

  public attributes: {};

  public commands = [] as const;

  /**
   * Contains the current status of the device and status of any individual sensors of that device.
   */
  public currentStatusReport: StatusReport[];
}
