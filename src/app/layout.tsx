import '@/assets/styles/globals.css';

import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { Toaster } from '@/components/ui/toaster';
import { SITE_CONFIG } from '@/configs/site.configs';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `${SITE_CONFIG.name} • %s`,
  },
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
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.desc,
    siteName: SITE_CONFIG.name,
    images: [`${SITE_CONFIG.url}/api/og`],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.desc,
    images: [`${SITE_CONFIG.url}/api/og`],
    creator: '@EDM1GHT',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
