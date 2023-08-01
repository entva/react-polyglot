import { transformPhrase } from 'node-polyglot';

export type TFunction = typeof transformPhrase;
export type Dictionary = Record<string, unknown>;

export type LocaleValue = {
  type: string,
  dictionary: Dictionary,
  [key: string]: unknown,
};

export type ContextValue = {
  t: TFunction,
  locale: unknown,
};
