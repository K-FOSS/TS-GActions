// src/Modules/Command/Commands/SetModeCommand.ts
import { BaseComamnd, CommandType } from '../BaseCommand';
import { ObjectGet } from '@k-foss/ts-gactions/Utils/types';

/**
 *
 * https://developers.google.com/assistant/smarthome/traits/modes#device-commands
 */
export class SetModesCommand extends BaseComamnd {
  public type = CommandType.SetMode as const;

  /**
   * Object containing the new string value (setting_name) for each mode that's being set.
   */
  public updateModeSettings: ObjectGet<Record<string, unknown>>;
}
