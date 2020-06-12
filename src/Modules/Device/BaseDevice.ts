// src/Modules/Device/BaseDevice.ts
import { ObjectGet, Intersect } from '../../Utils/types';
import { Traits } from '../Trait';
import { DeviceType } from './Device';
import { DeviceInfo } from './DeviceInfo';

/**
 * https://developers.google.com/assistant/smarthome/reference/intent/query#response_format
 */
export abstract class BaseDevice<T extends ReadonlyArray<Traits>> {
  /**
   * Maps partner device ID to object of state properties, as defined in States section below.
   */
  public id: string;

  /**
   * The hardware type of device
   */
  public type: DeviceType;

  /**
   * List of traits this device supports
   */
  public traits: T;

  /**
   * Indicates whether this device supports updating state asynchronously
   * https://developers.google.com/assistant/smarthome/develop/report-state
   */
  public willReportState: boolean;

  /**
   * Names of this device.
   */
  public abstract name: DeviceName;

  /**
   * Contains fields describing the device for use in
   * one-off logic if needed (e.g. 'broken firmware version X of light Y requires adjusting color',
   * or 'security ﬂaw requires notifying all users of firmware Z').
   */
  public abstract deviceInfo: DeviceInfo;

  public attributes: Intersect<ObjectGet<T>[number]>['attributes'];

  /**
   * Get the status of the device and device attributes
   */
  public abstract getStatus(): Promise<
    Omit<Intersect<ObjectGet<T>[number]>, 'commands' | 'type' | 'attributes'>
  >;

  public abstract executeCommand(
    command: T[number]['commands'][number],
  ): Promise<
    Partial<
      Omit<Intersect<ObjectGet<T>[number]>, 'commands' | 'type' | 'attributes'>
    >
  >;
}
