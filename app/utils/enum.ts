export const ROUTE = {
  HOME: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  DASHBOARD: '/dashboard',
  ALL_INVOICES: '/invoices',
};

export enum THEME {
  DARK = 'dark',
  LIGHT = 'light',
  LIGHTwindow = 'LIGHTwindow',
}

export const prefersDarkMQ = '(prefers-color-scheme: dark)';

export const THEMES: Array<THEME> = Object.values(THEME);
