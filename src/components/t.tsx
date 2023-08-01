import { ReactNode } from 'react';
import { useT } from '../hooks';
import { smartT } from '../utils';

type Props = {
  id: string,
  [key: string]: unknown,
};

const Component = ({ id, ...options }: Props) => {
  const t = useT();
  const result = smartT(t, id, options as Record<string, ReactNode>);
  return (result || null);
};

export default Component;
