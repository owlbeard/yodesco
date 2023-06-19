import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yodesco Taşımacılık',
  description:
    'Yodesco Taşımacılık ve Lojistik Tic. Ltd. Şti. Resmi İnternet Sitesidir.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
        <div className="flex flex-col h-screen max-w-full">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
