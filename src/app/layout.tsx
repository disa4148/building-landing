import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';
import { cn } from '@/src/shared/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xn--42-9kclfb7a0agct0a.xn--p1ai'),
  title: 'Печатный и декоративный бетон в Кемерово',
  description: 'Производство и укладка печатного бетона под ключ в Кемерово. Имитация камня, дерева, кирпича.',
  keywords: 'печатный бетон Кемерово, декоративный бетон Кемерово, штампованный бетон, укладка печатного бетона, бетон под камень, бетон под дерево, заказать печатный бетон, бетон 42',
  icons: {
    icon: '/assets/images/logo/logo-32x32.svg',
    shortcut: '/assets/images/logo/logo-32x32.svg',
    apple: '/assets/images/logo/logo-32x32.svg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Печатный и декоративный бетон в Кемерово',
    description: 'Производство и укладка печатного бетона под ключ в Кемерово.',
    url: '/',
    locale: 'ru_RU',
    type: 'website',
  },
};

const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'ООО Стройресурс',
    image: 'https://xn--42-9kclfb7a0agct0a.xn--p1ai/assets/images/logo/logo-32x32.svg',
    description: 'Производство и укладка печатного бетона под ключ в Кемерово.',
    url: 'https://xn--42-9kclfb7a0agct0a.xn--p1ai/',
    telephone: '+79234839377',
    priceRange: '₽₽',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Кемерово',
      addressRegion: 'Кемеровская область',
      addressCountry: 'RU',
    },
    areaServed: {
      '@type': 'City',
      name: 'Кемерово',
    },
  };

  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen antialiased flex flex-col',
          montserrat.className,
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
      </body>
    </html>
  );
};
export default RootLayout;
