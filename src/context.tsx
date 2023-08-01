import { createContext } from 'react';
import type { ContextValue } from './types';

const LocaleContext = createContext({} as ContextValue);

export const { Consumer, Provider } = LocaleContext;
export default LocaleContext;
