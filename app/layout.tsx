import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const SITE_URL = 'https://www.vyronsoft.co.za/';
const title = 'VYRONSOFT | Intelligent Software. Powerful Results.';
const description =
  'VYRONSOFT builds next-generation software solutions that automate, optimize and accelerate business growth.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: 'VYRONSOFT',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'VYRONSOFT',
    title,
    description,
    locale: 'en_ZA',
    images: [
      {
        url: '/images/vyronsoft-hero-background.png',
        width: 1672,
        height: 941,
        alt: 'VYRONSOFT — Intelligent Software. Powerful Results. Cape Town connected by glowing data network lines',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/vyronsoft-hero-background.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#050a18',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-ZA" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
