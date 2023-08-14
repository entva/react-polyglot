import { ReactNode } from 'react';
import { useT } from '../hooks';

type Props = {
  text: string,
  [key: string]: unknown,
};

const Component = ({ text, ...options }: Props) => {
  const t = useT();
  const result = t(text, options as Record<string, ReactNode>);
  return (result || null);
};

export default Component;
