import { League_Spartan, Quicksand } from 'next/font/google';

export const spartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '500', '700'],
  variable: '--font-spartan',
});

export const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600'],
  variable: '--font-quicksand',
});