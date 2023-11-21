import '@/assets/styles/globals.css';

import type { Metadata } from 'next';

import { Footer } from '@/components/footer';
import { Menu } from '@/components/menu';
import { ActiveSectionContextProvider } from '@/components/providers/active-section-context-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { APP_URL, SITE_CONFIG } from '@/configs/site.configs';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `${SITE_CONFIG.name} • Portfolio`,
  description: SITE_CONFIG.desc,
  keywords: SITE_CONFIG.keywords,
  authors: [
    {
      name: 'Oleksii Latyshev',
      url: 'https://github.com/EDMIGHT',
    },
  ],
  creator: 'Oleksii Latyshev',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'dimgrey' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.desc,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: new URL(`${APP_URL}/api/og`).toString(),
        width: 1200,
        height: 630,
        alt: 'Portfolio OG',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.desc,
    images: [
      {
        url: new URL(`${APP_URL}/api/og`).toString(),
        width: 1200,
        height: 630,
        alt: 'Portfolio OG',
      },
    ],
    creator: '@EDM1GHT',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <ActiveSectionContextProvider>
            <Menu />
            {children}
            <Footer />
            <TailwindIndicator />
            <ThemeSwitcher />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
