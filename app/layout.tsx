import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar, SideMenu } from '../components/myUi'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Photos App',
  description: 'Photos App by Obaixii',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" className='dark'>
      <body className={inter.className}>

        <Navbar />

        <div className='flex'>

          <SideMenu />

          <div className="w-full px-4 pt-8">{children}</div>
        </div>
      </body>
    </html>
  )
}
