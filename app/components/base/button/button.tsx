import cn from 'classnames';
import type { ButtonHTMLAttributes } from 'react';

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
  colorScheme?: 'gray' | 'light-gray' | 'purple' | 'red';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  fullWidth,
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
      {children}
    </button>
  );
};
