import type { ReactNode } from 'react';

export type TFunction = (
  phrase: string,
  substitutions?: Record<string, ReactNode> | number,
) => ReactNode;

export type LocaleValue = {
  type: string,
  [key: string]: unknown,
};

export type ContextValue = {
  t: TFunction,
  locale: LocaleValue,
};
