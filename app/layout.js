import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vector Visions - Professional Vector Art Services',
  description: 'Transform your designs with our expert vector art services for logos, embroidery, and custom patches.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FAFAFA]`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
