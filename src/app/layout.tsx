import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';

import './globals.css';
import { QueryProvider } from '@/components/query-provider';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'antialiased min-h-screen')}>
        <Toaster />

        <NuqsAdapter>
          <QueryProvider>{children}</QueryProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
