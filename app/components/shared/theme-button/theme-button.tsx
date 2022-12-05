import { BiMoon, BiSun } from 'react-icons/bi';

import { THEME } from '~/utils/enum';

import { useTheme } from '~/hooks/use-theme';

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT,
    );
  };

  return (
    <button
      onClick={handleToggleTheme}
      className="w-12 h-12 text-2xl flex justify-center items-center bg-overlay-light-background hover:bg-gray-200 dark:bg-overlay-dark-background hover:dark:bg-purple-darkest rounded-full"
    >
      {theme === 'dark' ? <BiSun /> : <BiMoon />}
    </button>
  );
};
