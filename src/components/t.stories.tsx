/* eslint no-alert: "off" */
import T from './t';
import { useLocale } from '../hooks';

export default { title: 'T' };

export const WithTComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dictionary = useLocale().dictionary as Record<string, any>;

  return (
    <div>
      <dl>
        <dt>Simple string:</dt>
        <dd><T text={dictionary.text} /></dd>

        <dt>Nested string:</dt>
        <dd><T text={dictionary.nested.text} /></dd>

        <dt>Substitutions:</dt>
        <dd>
          <T
            text={dictionary.substitution}
            variable_1={<strong onClick={() => alert('🍬')}>bubblegum</strong>}
            variable_2={<em onClick={() => alert('🍑')}>ass</em>}
          />
        </dd>

        <dt>Missing value:</dt>
        <dd>
          <T text={dictionary.missing} />
        </dd>
      </dl>
    </div>
  );
};
