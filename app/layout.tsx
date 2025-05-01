import './globals.css';
import type { Metadata } from 'next';
import { spartan, quicksand } from '@/lib/fonts';
import SiteHeader from '@/components/layout/site-header';
import Footer from '@/components/layout/footer';
import CustomCursor from '@/components/ui-custom/custom-cursor';

export const metadata: Metadata = {
  title: 'House of Esthete | Unique, Timeless, Limited',
  description: 'House of Esthete is not just a home-decor brand—it is a philosophy. Every object is Unique, Timeless, Limited, and meticulously handcrafted.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spartan.variable} ${quicksand.variable}`}>
      <body>
        <CustomCursor />
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}