import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { MainNav } from '@/components/main-nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CWSE',
  description: 'Portfolio site for CWSE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav/>
        {children}
        </body>
    </html>
  )
}
