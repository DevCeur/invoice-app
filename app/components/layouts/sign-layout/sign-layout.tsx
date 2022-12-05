import { ThemeButton } from '~/components/shared/theme-button';

type SignLayoutProps = {
  title: string;
  summary: string;
  children: React.ReactNode;
};

export const SignLayout = ({ children, title, summary }: SignLayoutProps) => {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      <ThemeButton />

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
