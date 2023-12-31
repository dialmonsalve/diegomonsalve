import { Header, Navbar, Footer } from '@/components/layout';

import { ButtonWhatsapp } from '@/components/UI';
import { firaSans } from '@/fonts';

import '@/styles/main.scss';

export const metadata = {
  title: 'dialmonsalve',
  description: 'Generated by Next.js',
  openGraph: {
    images: 'logo.svg',
  },
  robots: {
    googleBot: {
      index: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  
  
  return (
    <html lang="es">
      <body className={`${firaSans.className} antialiased`} >
        <div className="container">
          <ButtonWhatsapp />

          <Header />
          <Navbar />

          <main className="main">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
