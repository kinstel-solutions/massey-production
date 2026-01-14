import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Massey Production | Best Photographer in Lucknow | Wedding & Commercial Studio',
  description: 'Massey Production is a premier photography studio in Lucknow, specializing in weddings, corporate events, and fashion portfolios. Book the best photographer in Lucknow for your special moments.',
  keywords: ['Photographer in Lucknow', 'Wedding Photographer Lucknow', 'Best Photographer Lucknow', 'Fashion Photography Lucknow', 'Commercial Photographer Lucknow', 'Massey Production'],
  openGraph: {
    title: 'Massey Production | Best Photographer in Lucknow',
    description: 'Premier photography services in Lucknow for weddings, events, and commercial shoots.',
    url: 'https://masseyproduction.com',
    siteName: 'Massey Production',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(inter.variable, playfair.variable)}>
      <body className="font-sans antialiased text-foreground bg-background selection:bg-black selection:text-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
