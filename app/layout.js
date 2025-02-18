import Bg from '@/components/Bg'
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import JumpToTopButton from '@/components/JumpToTopButton'
export const metadata = {
  title: `Sarthak Portfolio `,
  description: 'Full Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Cursor />
        <Bg />
        <JumpToTopButton />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
