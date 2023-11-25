import type { Metadata } from 'next'
import './globals.css'
import { Footer, NavBar } from '@/components'


export const metadata: Metadata = {
  title: 'Car Hub Demo',
  description: 'Demo for Car hiring service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
