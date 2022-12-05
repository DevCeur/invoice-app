import { THEME } from '~/utils/enum';

import { useTheme } from '~/hooks/use-theme';

export const ThemeButton = () => {
  const { setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT,
    );
  };

  return (
    <div>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );
};
