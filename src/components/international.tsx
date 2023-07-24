import { useMemo, type ReactNode } from 'react';
import Polyglot from 'node-polyglot';
import { Provider } from '../context';
import type { TFunction, LocaleValue } from '../types';

// Left like this for uglify to be able to clean up
const warn = (...args: unknown[]) => console.error(...args);

const createInstance = ({ type: locale, dictionary: phrases }: LocaleValue): TFunction => {
  const polyglot = new Polyglot({ warn, locale, phrases });
  return polyglot.t.bind(polyglot);
};

type Props = {
  locale: LocaleValue,
  children: ReactNode,
};

const International = ({ locale, children }: Props) => {
  const context = useMemo(() => {
    const t = createInstance(locale || {});
    return { t, locale };
  }, [locale]);

  return <Provider value={context}>{children}</Provider>;
};

export default International;
