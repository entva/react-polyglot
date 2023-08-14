import { useMemo, type ReactNode } from 'react';
import { getT } from '../utils';
import { Provider } from '../context';
import type { LocaleValue } from '../types';

type Props = {
  locale: LocaleValue,
  children: ReactNode,
};

const International = ({ locale, children }: Props) => {
  const context = useMemo(() => {
    const t = getT(locale.type);
    return { t, locale };
  }, [locale]);

  return <Provider value={context}>{children}</Provider>;
};

export default International;
