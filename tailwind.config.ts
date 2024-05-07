import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        hauora: ['var(--font-hauora)'],
      },
      colors: {
        'dogwoose-rose': '#E3026F',
        night: '#0C0C0C',
        platinum: '#E7E7E9D9',
        gray: '#797979',
      },
    },
  },
  plugins: [],
};
export default config;
