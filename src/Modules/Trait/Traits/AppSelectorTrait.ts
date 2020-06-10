// src/Modules/Trait/Traits/AppSelectorTrait.ts
import { BaseTrait } from '../BaseTrait';
import { TraitType } from '../TraitType';
import { ArrayType } from '@k-foss/ts-gactions/Utils/types';
import { AppInstallCommand } from '../../Command/Commands/AppInstallCommand';
import { AppSelectCommand } from '../../Command/Commands/AppSelectCommand';

interface ApplicationName {
  /**
   * User-friendly synonyms for the application name for a given language. The first synonym is used in the response.
   */ // eslint-disable-next-line camelcase
  name_synonym: string[];

  lang: string;
}

export interface Application {
  /**
   * 	Unique key for the application which is not exposed to users in speech or response.
   */
  key: string;

  /**
   * Name of each application and its language-specific synonyms.
   */
  names: ApplicationName[];
}
interface Attributes {
  /**
   * A list of applications. Each application has one or
   * more synonyms in each supported language. The first synonym is used in the response.
   */
  availableApplications: Application[];
}

/**
 * Google Smart Home Application Selector Trait
 * https://developers.google.com/assistant/smarthome/traits/appselector
 */
export class AppSelectorTrait extends BaseTrait {
  public type = TraitType.AppSelector;

  public commands = [new AppInstallCommand(), new AppSelectCommand()] as const;

  /**
   * https://developers.google.com/assistant/smarthome/traits/appselector#device-attributes
   */
  public attributes: Attributes;

  public currentApplication: ArrayType<
    AppSelectorTrait['attributes']['availableApplications']
  >['key'];
}
