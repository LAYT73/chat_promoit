import {
    createPluralize, I18N, useI18N as useI18nBase, useTranslate as useTranslateBase
} from '@ayub-begimkulov/i18n';
import { ReactI18N } from '@ayub-begimkulov/i18n/dist/react/hooks';

import en from './keys/en.json';
import ru from './keys/ru.json';

const pluralizeEn = createPluralize('en');
const pluralizeRu = createPluralize('ru');

export const i18n = new I18N({
  defaultLang: 'ru',
  languages: {
    en: {
      keyset: en,
      pluralize: pluralizeEn,
    },
    ru: {
      keyset: ru,
      pluralize: pluralizeRu,
    },
  },
});

export const useTranslate = useTranslateBase<typeof i18n>;

export const useI18N: () => ReactI18N<typeof i18n> = useI18nBase<typeof i18n>;
