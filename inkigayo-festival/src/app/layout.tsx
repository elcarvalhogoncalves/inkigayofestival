import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
const myFont = localFont({src: '../assets/PowerGrotesk-Regular.ttf'})

export const metadata = {
  title: 'Inkigayo Festival ~',
  description: 'DESCRIÇÃO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
