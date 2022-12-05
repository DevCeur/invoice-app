import type { THEME } from './enum';
import { THEMES } from './enum';

export const isTheme = (value: unknown): value is THEME => {
  return typeof value === 'string' && THEMES.includes(value as THEME);
};
