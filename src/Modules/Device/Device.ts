// src/Modules/Devices/Device.ts
export enum DeviceType {
  /**
   * Air conditioning units are similar to thermostats,
   * but do not support heating and may not support setting temperature targets,
   * but rather rely on modes, toggles, and fan speed settings (for example, high and low).
   *
   * This type indicates that the device gets the AC icon and some AC unit synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/airconditioning
   */
  ACUnit = 'action.devices.types.AC_UNIT',

  /**
   * Air coolers are devices that allow temperature cooling and humidity control.
   * These devices are typically more lightweight and portable than air conditioners,
   * and have a water tank attached. Air coolers may not support heating or setting exact
   * temperatures. Interactions with air coolers may include changing the fan speed and
   * humidity setting.
   *
   * This type indicates that the device gets the air cooler icon and some synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/aircooler
   */
  AirCooler = 'action.devices.types.AIRCOOLER',

  /**
   * Air fresheners can be turned on and off and adjust various modes and toggles.
   *
   * This type indicates that the device gets the air freshener icon and some synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/airfreshener
   */
  AirFreshener = 'action.devices.types.AIRFRESHENER',

  /**
   * Air purifiers are devices that may be turned on and off,
   * report air filter cleanliness and air filter lifetime, and be adjusted to various mode settings.
   *
   * This type indicates that the device gets the air purifier icon and some air purifier synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/airpurifier
   */
  AirPurifier = 'action.devices.types.AIRPURIFIER',

  /**
   * Awnings are retractable and can opened and closed. They can be installed indoors or outdoors.
   *
   * This type indicates that the device gets the awning icon and some synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/awning
   */
  Awning = 'action.devices.types.AWNING',

  /**
   * Bathtubs can be filled and drained, possibly to particular levels if the bathtub supports it.
   *
   * This type indicates that the device gets the bathtub icon and some synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/bathtub
   */
  Bathtub = 'action.devices.types.BATHTUB',

  /**
   * Interactions with beds may include adjusting various modes and setting scenes.
   *
   * https://developers.google.com/assistant/smarthome/guides/bed
   */
  Bed = 'action.devices.types.BED',

  /**
   * Blinds can be opened and closed, and various types of blinds are supported such as venetian
   * (opens in one direction), panel or vertical (may open either left or right),
   * and top-down bottom-up (may open either up or down).
   *
   * https://developers.google.com/assistant/smarthome/guides/blinds
   */
  Blinds = 'action.devices.types.BLINDS',

  /**
   * Interactions with blenders may include starting and stopping, setting a timer,
   * setting cooking modes or food presets, or adjusting other various settings.
   *
   * This type indicates that the device gets the blender icon and some synonyms and aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/blender
   */
  Blender = 'action.devices.types.BLENDER',

  /**
   * Boilers can be turned on and off, may support adjusting temperature or various modes.
   *
   * This type indicates that the device gets the boiler icon and some boiler synonyms and aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/boiler
   */
  Boiler = 'action.devices.types.BOILER',

  /**
   * Cameras are complex and features will vary significantly between vendors. Over time, cameras will acquire many
   * traits and attributes describing specific capabilities, many of which may interact with the video/audio stream in special ways,
   * such as sending a stream to another device, identifying what's in the stream, replaying feeds, etc. As such,
   * cameras also interact with other devices - especially screens and other media targets.
   *
   * https://developers.google.com/assistant/smarthome/guides/camera
   */
  Camera = 'action.devices.types.CAMERA',

  /**
   * Carbon monoxide detectors may report whether carbon monoxide is currently detected,
   * whether the carbon monoxide level is high, and the current carbon monoxide level in
   * parts per million.
   *
   * This type indicates that the device gets carbon monoxide detector type synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/carbonmonoxidedetector
   */
  CarbonMonoxideDetector = 'action.devices.types.CARBON_MONOXIDE_DETECTOR',

  /**
   * Interactions with chargers may include starting and stopping charging,
   * and checking the current charge level, capacity remaining, and capacity until full values.
   *
   * This type indicates that the device gets the charger icon and some synonyms and aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/charger
   */
  Charger = 'action.devices.types.CHARGER',

  /**
   * Closets can be opened and closed, potentially in more than one direction.
   *
   * This type indicates that the device gets the closet icon and some synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/closet
   */
  Closet = 'action.devices.types.CLOSET',

  /**
   * Interactions with coffee makers may include turning them on and off, adjusting cooking modes
   * and food presets, adjusting the target temperature,
   * and adjusting various non-cooking mode settings.
   *
   * This type indicates that the device gets the coffee maker icon and applicable synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/coffeemaker
   */
  CoffeeMaker = 'action.devices.types.COFFEE_MAKER',

  /**
   * Interactions with cooktops may include turning them on and off, starting and stopping,
   * setting a timer, adjusting cooking modes and food presets, and adjusting various non-cooking
   * mode settings.
   *
   * This type indicates that the device gets the cooktop icon and some synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/cooktop
   */
  Cooktop = 'action.devices.types.COOKTOP',

  /**
   * Curtains can be opened and closed, potentially in more than one direction. For example,
   * curtains with two sections may open either to the left or to the right.
   *
   * This type indicates that the device gets the curtain icon and some synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/curtain
   */
  Curtain = 'action.devices.types.CURTAIN',

  /**
   * Dehumidifiers are devices that remove moisture from the air. They can be turned on and off,
   * report and adjust target humidity, and may have various adjustables modes, toggles,
   * or fan speed settings.
   *
   * This type indicates that the device gets the dehumidifier icon and some synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/dehumidifier
   */
  Dehumidifier = 'action.devices.types.DEHUMIDIFIER',

  /**
   * Interactions with dehydrators may include starting and stopping, setting a timer,
   * adjusting cooking modes or food presets, or adjusting other various settings.
   *
   * This type indicates that the device gets the dehydrator icon and some synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/dehydrator
   */
  Dehydrator = 'action.devices.types.DEHYDRATOR',

  /**
   * Dishwashers can have start and stop functionality independent from being on or off (some washers have separate power buttons,
   * and some do not). Some can be paused and resumed while washing. Dishwashers also have various modes and each mode has its own
   * related settings. These are specific to the dishwasher and are interpreted in a generalized form.
   *
   * This type indicates that the device gets the dishwasher icon and some dishwasher-type synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/dishwasher
   */
  Dishwasher = 'action.devices.types.DISHWASHER',

  /**
   * Door can be opened and closed, potentially in more than one direction .
   *
   * This type indicates that the device gets the door icon and some synonyms and aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/door
   */
  Door = 'action.devices.types.DOOR',

  /**
   * Drawers can be opened and closed, potentially in more than one direction.
   *
   * This type indicates that the device gets the drawer icon and some synonyms and aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/drawer
   */
  Drawer = 'action.devices.types.DRAWER',

  /**
   * Dryers have start and stop functionality independent from being on or off. Some can be paused and resumed while drying.
   * Dryers also have various modes and each mode has its own related settings. These are specific to the dryer and are interpreted
   * in a generalized form.
   *
   * This type indicates that the device gets the dryer icon and some dryer-type synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/dryer
   */
  Dryer = 'action.devices.types.DRYER',

  /**
   * Fans can typically be turned on and off and have speed settings. Some fans may also have
   * additional supported modes, such as fan direction/orientation (for example, a wall unit
   * may have settings to adjust whether it blows up or down).
   *
   * This type indicates that the device gets the fan icon and some fan-type synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/fan
   */
  Fan = 'action.devices.types.FAN',

  /**
   * Faucets can dispense liquids in various quantities and presets. Faucets may have various
   * modes and each mode has its own related settings. These are specific to the faucet and
   * are interpreted in a generalized form.
   *
   * This type indicates that the device gets the faucet icon and some synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/faucet
   */
  Faucet = 'action.devices.types.FAUCET',

  /**
   * Fireplaces can be turned on and off, and may have adjustable modes and toggles.
   *
   * This type indicates that the device gets the fireplace icon and some type synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/fireplace
   */
  Fireplace = 'action.devices.types.FIREPLACE',

  /**
   * This type indicates that the device gets the light bulb icon and some light synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/light
   */
  Light = 'action.devices.types.LIGHT',

  /**
   * In the case of scenes, the type maps 1:1 to the trait, as scenes don't combine
   * with other traits to form composite devices.
   *
   * Scenes should always have user-provided names, not default 'BobCo Scene' naming.
   * Each scene is its own virtual device, with its own name(s). User-provided names
   * may come in from SYNC.
   *
   * https://developers.google.com/assistant/smarthome/guides/scene
   */
  Scene = 'action.devices.types.SCENE',

  /**
   * A single sensor can serve multiple functions, such as monitoring both
   * temperature and humidity. Sensors may report either or both quantitative—for example,
   * carbon monoxide and smoke level measured at parts per million—and qualitative
   * measurements (such as whether air quality is healthy or unhealthy).
   *
   * This type indicates that the device gets the sensor icon and some synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/sensor
   */
  Sensor = 'action.devices.types.SENSOR',

  /**
   * Security systems can be armed and disarmed. They can be armed at multiple security levels
   * (for example, home and away) and they can report information about certain sensors,
   * such as a sensor that detects motion or an open window. Disarming a security system
   * is a sensitive action which may require two-factor authentication
   *
   * This type indicates that the device gets the security system icon and some synonyms/aliases.
   *
   * https://developers.google.com/assistant/smarthome/guides/securitysystem
   */
  SecuritySystem = 'action.devices.types.SECURITYSYSTEM',

  /**
   * Switch, a basic device in Smart Home, has binary modes on/off only.
   *
   * https://developers.google.com/assistant/smarthome/guides/switch
   */
  Switch = 'action.devices.types.SWITCH',
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
