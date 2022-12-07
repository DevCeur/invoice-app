import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import type { ButtonHTMLAttributes } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

enum COLOR_SCHEME {
  GRAY = 'gray',
  LIGHT_GRAY = 'light-gray',
  PURPLE = 'purple',
  RED = 'red',
}

const STYLE_BY_COLOR_SCHEME = {
  [COLOR_SCHEME.GRAY]:
    'text-text-default dark:text-dark-text-light bg-purple-dark hover:bg-text-dark hover:dark:bg-purple-darkest',
  [COLOR_SCHEME.LIGHT_GRAY]: 'text-text-default bg-gray-100',
  [COLOR_SCHEME.PURPLE]: 'text-white bg-purple-default hover:bg-purple-light',
  [COLOR_SCHEME.RED]: 'text-white bg-red-default',
};

type ButtonProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  isLoding?: boolean;
  colorScheme?: 'gray' | 'light-gray' | 'purple' | 'red';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  fullWidth,
  isLoding,
  colorScheme = 'gray',
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={cn({
        button: true,
        [STYLE_BY_COLOR_SCHEME[colorScheme]]: true,
        'w-full': fullWidth,
      })}
      {...buttonProps}
    >
      <AnimatePresence initial={false} mode="wait">
        {isLoding ? (
          <motion.span
            key="spinner"
            className="inline-block animate-spin"
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 10 }}
            transition={{ duration: 0.2 }}
          >
            <AiOutlineLoading3Quarters />
          </motion.span>
        ) : (
          <motion.span
            key="button-text"
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 10 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
