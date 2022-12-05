import tailwindStyles from './styles/generated/tailwind.css';
import { getThemeSession } from './utils/theme.server';

import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import cn from 'classnames';

import type { THEME } from '~/utils/enum';

import { ThemeProvider } from '~/context/theme-context';

import { useTheme } from '~/hooks/use-theme';

import { NonFlashOfWrongTheme } from '~/components/shared/non-flashing-wrong-theme';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Invoice App',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
];

export type LoaderData = {
  theme: THEME | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return data;
};

const App = () => {
  const data = useLoaderData();

  const { theme } = useTheme();

  return (
    <html lang="en" className={cn(theme)}>
      <head>
        <Meta />
        <Links />
        <NonFlashOfWrongTheme ssrTheme={Boolean(data.theme)} />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

const AppWithProviders = () => {
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
};

export default AppWithProviders;
