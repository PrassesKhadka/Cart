'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import './globals.css';
import { ReduxProvider } from './redux/Provider';
import CartSlider from './components/CartSlider';

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
          <div className="bg-black text-white flex justify-center items-center h-4 ">
            <h2>This website is far from complete.Working on it... </h2>
          </div>
          <Navbar />
          <main className="px-8">
            <CartSlider />
            {children}
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
