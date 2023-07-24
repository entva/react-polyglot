import International from '../src';

const locale = {
  type: 'de',
  dictionary: {
    text: 'Hallo!',
    nested: {
      text: 'Hallo nochmal!',
    },
    substitution: 'I have come here to chew %{variable_1} and kick %{variable_2}... and I\'m all out of %{variable_1}.',
  },
};

export const Provider = ({ children }) => (
  <International locale={locale}>
    {children}
  </International>
);
