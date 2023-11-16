// layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Home from './page'
import AboutMe from './about'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Himanshu | Portfolio',
  description: 'Explore the portfolio of Himanshu - Developer, Reader, Writer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href="@app/favicon.ico" />
      </head>
      <body className="bg-[#121212] text-white font-inter">
        <Home />

        <AboutMe />
      </body>
    </html>
  )
}
