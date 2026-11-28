import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

// Idioma del sitio. Cada texto traducible es { es, en }; `t()` devuelve el del
// idioma activo y deja pasar tal cual cualquier otro valor (nombres, URLs…).

const LangContext = createContext(null);
const STORAGE_KEY = 'portfolio-lang';

const initialLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    // Sin acceso a localStorage: se usa el idioma por defecto.
  }
  return 'es';
};

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === 'es'
        ? 'Jeferson Bustamante Gómez — Desarrollador full-stack + IA'
        : 'Jeferson Bustamante Gómez — Full-stack developer + AI';
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Preferencia solo para esta visita.
    }
  }, [lang]);

  const t = useCallback(
    (value) =>
      value && typeof value === 'object' && !Array.isArray(value) && 'es' in value && 'en' in value
        ? value[lang]
        : value,
    [lang],
  );

  const toggle = useCallback(() => setLang((l) => (l === 'es' ? 'en' : 'es')), []);
  const value = useMemo(() => ({ lang, setLang, toggle, t }), [lang, toggle, t]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LangContext);
