// src/Modules/Device/BaseDevice.ts
import { ObjectGet } from '../../Utils/types';
import { Traits } from '../Trait/TraitClass';
import { DeviceType } from './Device';
import { DeviceInfo } from './DeviceInfo';
import { Command } from '../Command/Command';

export abstract class BaseDevice<T extends ReadonlyArray<Traits>> {
  public id: string;

  public type: DeviceType;

  public traits: T;

  /**
   * Names of this device.
   */
  public abstract name: DeviceName;

  public get commands(): Command[] {
    return this.traits.flatMap(({ commands }) => commands);
  }

  /**
   * Contains fields describing the device for use in
   * one-off logic if needed (e.g. 'broken firmware version X of light Y requires adjusting color',
   * or 'security ﬂaw requires notifying all users of firmware Z').
   */
  public abstract deviceInfo: DeviceInfo;

  /**
   * Get the status of the device and device attributes
   */
  public abstract getStatus(): Promise<
    Omit<Intersect<ObjectGet<T>[number]>, 'commands' | 'type'>
  >;

  public abstract executeCommand(
    command: T[number]['commands'][number],
  ): Promise<void>;
}
