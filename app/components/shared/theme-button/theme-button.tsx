import { AnimatePresence, motion } from 'framer-motion';
import { BiMoon, BiSun } from 'react-icons/bi';

import { THEME } from '~/utils/enum';

import { useTheme } from '~/hooks/use-theme';

type ThemeButtonProps = {
  showBackground?: boolean;
};

export const ThemeButton = ({ showBackground }: ThemeButtonProps) => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT,
    );
  };

  return (
    <button
      onClick={handleToggleTheme}
      className={`w-12 h-12 text-2xl flex justify-center items-center ${
        showBackground &&
        'bg-overlay-light-background hover:bg-gray-200 dark:bg-overlay-dark-background hover:dark:bg-purple-darkest'
      } rounded-full`}
    >
      <AnimatePresence initial={false} mode="wait">
        {theme === THEME.DARK ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, translateY: -5 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 5 }}
            transition={{ duration: 0.2 }}
          >
            <BiSun />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, translateY: -5 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 5 }}
            transition={{ duration: 0.2 }}
          >
            <BiMoon />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
