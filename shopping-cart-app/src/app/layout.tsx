'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import './globals.css';
import { ReduxProvider } from './redux/Provider';
import CartSlider from './components/CartSlider';
import Footer from './components/Footer';
import Marque from './components/Marquee';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <CartSlider />
          <Marque />
          <Navbar />
          <main className="px-8 xl:ml-[10%] xl:mr-[10%] min-h-screen">
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
