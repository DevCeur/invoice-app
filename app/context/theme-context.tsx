import { useFetcher } from '@remix-run/react';
import { createContext, useEffect, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { THEME, THEMES, prefersDarkMQ } from '~/utils/enum';

const getPreferredTheme = () =>
  window.matchMedia(prefersDarkMQ).matches ? THEME.DARK : THEME.LIGHT;

type ThemeContextType = {
  theme: THEME | null;
  setTheme: Dispatch<SetStateAction<THEME | null>>;
};

export const themeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

type ThemeProviderProps = {
  children: React.ReactNode;
  specifiedTheme: THEME | null;
};

const ThemeProvider = ({ children, specifiedTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<THEME | null>(() => {
    if (specifiedTheme) {
      if (THEMES.includes(specifiedTheme)) {
        return specifiedTheme;
      } else {
        return null;
      }
    }

    return getPreferredTheme();
  });

  const persistTheme = useFetcher();

  const persistThemeRef = useRef(persistTheme);

  useEffect(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);

  const mountRun = useRef(false);

  useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!theme) {
      return;
    }

    persistThemeRef.current.submit(
      { theme },
      { action: '/set-theme', method: 'post' },
    );
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersDarkMQ);

    const handleChange = () => {
      setTheme(mediaQuery.matches ? THEME.DARK : THEME.LIGHT);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export { THEME, ThemeProvider };
