import { Header, Hero, MainContent, Footer } from '@/components';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Hanaa Sadoqi's Portfolio",
  description: "Full-stack web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen antialiased`}>
        <Header />
        <Hero />
        <MainContent>
          {children}
        </MainContent>
        <Footer />
      </body>
    </html>
  );
}
