import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const hauora = localFont({
  src: [
    {
      path: '../fonts/Hauora/Hauora-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    { path: '../fonts/Hauora/Hauora-Bold.otf', weight: '700', style: 'normal' },
    {
      path: '../fonts/Hauora/Hauora-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Hauora/Hauora-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Hauora/Hauora-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-hauora',
});
