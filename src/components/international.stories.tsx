import { useInternational, useLocale, useT } from '../hooks';

export default { title: 'International' };

const WithInternationalHook = () => {
  const { t, locale } = useInternational();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dictionary = locale.dictionary as Record<string, any>;

  return (
    <div>
      <dl>
        <dt>Simple string:</dt>
        <dd>{t(dictionary.text)}</dd>

        <dt>Nested string:</dt>
        <dd>{t(dictionary.nested.text)}</dd>

        <dt>Substitutions:</dt>
        <dd>
          {t(dictionary.substitution, {
            variable_1: 'bubblegum',
            variable_2: 'ass',
          })}
        </dd>

        <dt>Missing value:</dt>
        <dd>
          {t(dictionary.missing)}
        </dd>
      </dl>
    </div>
  );
};

export const InternationalHook = () => <WithInternationalHook />;

const WithLocaleHook = () => {
  const locale = useLocale();

  return (
    <pre>
      locale:
      {JSON.stringify(locale, null, 2)}
    </pre>
  );
};

export const LocaleHook = () => <WithLocaleHook />;


const WithTHook = () => {
  const t = useT();
  const locale = useLocale();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dictionary = locale.dictionary as Record<string, any>;

  return (
    <div>
      <dl>
        <dt>Simple string:</dt>
        <dd>{t(dictionary.text)}</dd>

        <dt>Nested string:</dt>
        <dd>{t(dictionary.nested.text)}</dd>

        <dt>Substitutions:</dt>
        <dd>
          {t(dictionary.substitution, {
            variable_1: 'bubblegum',
            variable_2: 'ass',
          })}
        </dd>

        <dt>Missing value:</dt>
        <dd>
          {t(dictionary.missing)}
        </dd>
      </dl>
    </div>
  );
};

export const THook = () => <WithTHook />;
