import { prefersDarkMQ } from '~/utils/enum';

import { useTheme } from '~/hooks/use-theme';

const clientThemeCode = `
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersDarkMQ)}).matches
    ? 'dark'
    : 'light';

  const cl = document.documentElement.classList;

  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');

  if (themeAlreadyApplied) {
    console.warn(
      "Daaaaamn",
    );
  } else {
    cl.add(theme);
  }

  const meta = document.querySelector('meta[name=color-scheme]');
  if (meta) {
    if (theme === 'dark') {
      meta.content = 'dark';
    } else if (theme === 'light') {
      meta.content = 'light';
    }
  } else {
    console.warn(
      "Daaaaaaaaamn",
    );
  }
})();
`;

export const PreventThemeFlashing = ({ ssrTheme }: { ssrTheme: boolean }) => {
  const { theme } = useTheme();

  return (
    <>
      <meta
        name="color-scheme"
        content={theme === 'light' ? 'light' : 'dark'}
      />

      {ssrTheme ? null : (
        <script dangerouslySetInnerHTML={{ __html: clientThemeCode }} />
      )}
    </>
  );
};
