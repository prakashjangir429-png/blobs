import type { Metadata } from 'next'
import { Noto_Sans, Outfit } from 'next/font/google'
import './globals.css'
import RainbowCursor from '@/components/Rainbow'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto',
})
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Digital Agency - IT, Marketing & Design Services',
  description:
    'Professional digital agency specializing in IT services, digital marketing, and graphic design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="relative antialiased bg-background text-foreground font-sans ![text-shadow:0_2px_10px_rgba(0,0,0,0.1)]">
       <div className='relative z-0'>
        <Navigation />

        {children}
        <Footer />

        </div> 
        <RainbowCursor/>

      </body>
    </html>
  )
}