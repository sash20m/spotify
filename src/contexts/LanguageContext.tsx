/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';

export interface LanguageType {
  language: string;
  onChangeLang: (lang: string) => void;
}

const defaultValue = {
  language: '',
  onChangeLang: () => {},
};

export const LanguageContext = React.createContext<LanguageType>(defaultValue);

export const LanguageProvider = ({
  children,
}: {
  children: (language: string) => React.ReactNode;
}): React.ReactElement => {
  const [language, setLanguage] = React.useState<string>(localStorage.getItem('lang') || 'en');

  const onChangeLang = (lang: string): void => {
    setLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return <LanguageContext.Provider value={{ language, onChangeLang }}>{children(language)}</LanguageContext.Provider>;
};
