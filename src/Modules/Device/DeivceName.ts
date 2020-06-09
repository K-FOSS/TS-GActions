// src/Modules/Device/DeviceName.ts

interface DeviceName {
  /**
   * List of names provided by the partner rather than the user, often manufacturer names, SKUs, etc.s
   */
  defaultNames: string[];

  /**
   * Primary name of the device, generally provided by the user.
   * This is also the name the Assistant will prefer to describe the device in responses.
   */
  name: string;

  /**
   * Additional names provided by the user for the device.
   */
  nicknames: string[];
}
