import '@/styles/globals.css';

import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import '@fortawesome/fontawesome-free/css/regular.min.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from '@/providers';
import { Layout } from '@/templates/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} className={`${inter.className}`}>
        <Providers>
          <Layout>
            <main>{children}</main>
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
