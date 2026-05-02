import type { Metadata } from 'next';
import { Cormorant_Garamond, Lato } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rooted — A Faith Foundation Journey',
  description:
    "Build an unshakeable faith through Norman Geisler's Twelve Points. A journey for young Christians in Singapore.",
  keywords: ['faith', 'apologetics', 'Christianity', 'Singapore', 'Geisler'],
  openGraph: {
    title: 'Rooted — A Faith Foundation Journey',
    description: 'Twelve points. One foundation. Built to last.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
      <body style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  );
}
