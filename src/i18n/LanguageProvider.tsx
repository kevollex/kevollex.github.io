import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  LanguageContext,
  type LanguageContextValue,
} from './languageContext'
import { translations, type Language } from './translations'

const storageKey = 'portfolio-language'

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'en'
  }

  return window.localStorage.getItem(storageKey) === 'es' ? 'es' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
  }

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem(storageKey, language)
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
