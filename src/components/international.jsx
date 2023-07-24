import { useMemo } from 'react';
import Polyglot from 'node-polyglot';
import { Provider } from '../context';

// Left like this for uglify to be able to clean up
const warn = (...args) => console.error(...args);

const createInstance = ({ type: locale, dictionary: phrases }) => {
  const polyglot = new Polyglot({ warn, locale, phrases });
  return polyglot.t.bind(polyglot);
};

const International = ({ locale, debug, children }) => {
  const context = useMemo(() => {
    const instance = createInstance(locale || {});
    const t = typeof debug === 'function' ? debug.bind(null, instance) : instance;
    return { t, locale };
  }, [locale, debug]);

  return <Provider value={context}>{children}</Provider>;
};

export default International;
