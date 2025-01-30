'use client';
import '../../i18n'; // Подключение локализации
import './styles/globals.css';
import { ThemeProvider } from '@/src/components/theme-provider';
import Navbar from '../components/navbar';
import Footer from '@/src/components/footer';
import { useTranslation } from 'react-i18next';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();


  return (
    <html lang={i18n.language} suppressHydrationWarning>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body className="bg-[#050119] w-full max-[400px]:w-[122%]">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className=" w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
