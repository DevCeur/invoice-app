import type { THEME } from './enum';
import { isTheme } from './is-theme';

import { createCookieSessionStorage } from '@remix-run/node';

const themeSessionSecret = process.env.THEME_SESSION_SECRET;

if (!themeSessionSecret) {
  throw new Error('SESSION_SECRET must be set');
}

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: 'invoice_app/theme_cookie',
    secure: true,
    secrets: [themeSessionSecret],
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
  },
});

export const getThemeSession = async (request: Request) => {
  const session = await themeStorage.getSession(request.headers.get('Cookie'));
  return {
    getTheme: () => {
      const themeValue = session.get('theme');
      return isTheme(themeValue) ? themeValue : null;
    },
    setTheme: (theme: THEME) => session.set('theme', theme),
    commit: () => themeStorage.commitSession(session),
  };
};
