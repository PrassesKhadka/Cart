import Navbar from './components/Navbar'
import './globals.css'
import { ReduxProvider } from './redux/Provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><ReduxProvider><Navbar/>{children}</ReduxProvider></body>
    </html>
  )
}
