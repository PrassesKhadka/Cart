'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import './globals.css';
import { ReduxProvider } from './redux/Provider';
import CartSlider from './components/CartSlider';
import Footer from './components/Footer';

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
          <Navbar />
          <main className="px-8">
            <CartSlider />
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
