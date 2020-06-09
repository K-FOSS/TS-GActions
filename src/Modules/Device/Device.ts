// src/Modules/Devices/Device.ts
export enum DeviceType {
  LIGHT = 'action.devices.types.LIGHT',
  AC_UNIT = 'action.devices.types.AC_UNIT',
}

interface DeviceOptions {
  type: DeviceType;
}

export function Device<T extends { new (...args: any[]): any }>({
  type,
}: DeviceOptions): (constructor: T) => T {
  return (constructor: T): T => {
    console.log('Device Decorator: ', constructor);

    return class extends constructor {
      public type = type;
    };
  };
}
