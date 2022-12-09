/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        'light-background': '#F8F8FB',
        'overlay-light-background': '#FFFFFF',
        'dark-background': '#141625',
        'overlay-dark-background': '#1E2139',

        'text-light': '#7E88C3',
        'text-default': '#888EB0',
        'text-dark': '#0C0E16',

        'dark-text-light': '#DFE3FA',
        'dark-text-default': '#FFFFFF',

        'purple-lightest': '#D0D7FF',
        'purple-default': '#7C5DFA',
        'purple-light': '#9277FF',
        'purple-dark': '#373B53',
        'purple-darkest': '#252945',

        'red-default': '#EC5757',
        'red-light': '#9277FF',

        'green-default': '#33D69F',

        'yellow-default': '#FF8F00',
      },
    },
  },

  plugins: [],
};
