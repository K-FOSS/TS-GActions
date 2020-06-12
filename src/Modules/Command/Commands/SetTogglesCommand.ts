// src/Modulese/Command/Commands/SetTogglesCommand.ts
import { BaseComamnd, CommandType } from '../BaseCommand';

/**
 * Sets Toggles for a device
 * https://developers.google.com/assistant/smarthome/traits/toggles#device-commands
 */
export class SetTogglesCommand extends BaseComamnd {
  public type = CommandType.SetToggles as const;

  /**
   * Key of the application to select.
   */
  public updateToggleSettings: Record<string, boolean>;
}
