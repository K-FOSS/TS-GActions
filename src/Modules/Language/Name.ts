/* eslint-disable camelcase */
// src/Modules/Language/Name.ts
import type { Language } from './Languages';

export interface NameValue {
  /**
   * User-friendly names in each language supported; the first name will be used in TTS as needed
   */
  name_synonym: string[];

  /**
   * Supported language for the names
   */
  lang: Language;
}

export interface Name {
  /**
   * Internal name, which will be used in commands and states. This can be non-user-friendly, and will be shared across all languages
   */
  name: string;

  /**
   * Contains names and supported languages
   */
  name_values: NameValue[];
}
