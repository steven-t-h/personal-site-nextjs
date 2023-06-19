import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Providers from './Providers'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Steven Hall | Full Stack Developer',
  description: 'Steven Hall is a full stack developer with a passion for building great products.',
  image: 'https://avatars.githubusercontent.com/u/29719881?v=4',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
