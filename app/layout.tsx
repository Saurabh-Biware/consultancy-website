import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Catalyst Matrix | Accelerating Your Vision',
  description: 'From Blueprint to Brilliance. We fuse creative vision with future-proof technology to elevate your brand and drive exponential growth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${plusJakarta.className} antialiased overflow-x-hidden w-full`}>{children}</body>
    </html>
  )
}
