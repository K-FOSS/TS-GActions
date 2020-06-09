// src/Modules/Device/DeviceInfo.ts

export interface DeviceInfo {
  /**
   * Especially useful when the partner is a hub for other devices.
   * Google may provide a standard list of manufacturers here so that e.g. TP-Link and Smartthings both describe 'osram' the same way.
   */
  manufacturer: string;

  /**
   * The model or SKU identifier of the particular device.
   */
  model: string;

  /**
   * Specific version number attached to the hardware if available.
   */
  hwVersion: string;

  /**
   * Specific version number attached to the software/firmware, if available.
   */
  swVersion: string;
}
