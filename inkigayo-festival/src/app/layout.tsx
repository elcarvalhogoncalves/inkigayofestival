import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Provider from '@/components/ui/Provider'


const inter = Inter({ subsets: ['latin'] })
// const myFont = localFont({src: '../assets/PowerGrotesk-Regular.ttf'})

const myFont = localFont({
  src: '../assets/PowerGrotesk-Regular.ttf',
  display: 'swap',
})

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
    <html lang="en" className={myFont.className}>
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  )
}
