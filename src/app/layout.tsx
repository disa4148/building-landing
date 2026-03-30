import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';
import { cn } from '@/src/shared/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://xn--42-9kclfb7a0agct0a.xn--p1ai'),
  title: 'Печатный и декоративный бетон в Кемерово',
  description: 'Производство и укладка печатного бетона под ключ в Кемерово. Имитация камня, дерева, кирпича.',
  keywords: 'печатный бетон Кемерово, декоративный бетон Кемерово, штампованный бетон, укладка печатного бетона, бетон под камень, бетон под дерево, заказать печатный бетон, бетон 42',
  openGraph: {
    title: 'Печатный и декоративный бетон в Кемерово',
    description: 'Производство и укладка печатного бетона под ключ в Кемерово.',
    locale: 'ru_RU',
    type: 'website',
  },
};

const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen antialiased flex flex-col',
          montserrat.className,
        )}
      >
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
