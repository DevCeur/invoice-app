import { Link } from '@remix-run/react';

import { ROUTE } from '~/utils/enum';

import { ThemeButton } from '~/components/shared/theme-button';

type SignLayoutProps = {
  title: string;
  summary: string;
  children: React.ReactNode;
};

export const SignLayout = ({ children, title, summary }: SignLayoutProps) => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      <div className="absolute z-10 top-0 w-full flex justify-between items-center px-10 py-6">
        <Link
          to={ROUTE.HOME}
          className="text-xl dark:text-dark-text-light font-semibold"
        >
          Invoice App
        </Link>

        <ThemeButton />
      </div>

      <div className="w-full max-w-lg bg-white border dark:bg-dark-background border-slate-200 dark:border-purple-darkest py-8 px-10 rounded-xl">
        <header className="mb-12">
          <h1 className="text-2xl text-text-dark dark:text-white font-semibold">
            {title}
          </h1>

          <span className="inline-block text-sm font-light text-text-light dark:text-dark-text-light">
            {summary}
          </span>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
};
