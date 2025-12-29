import './globals.css'
import { EB_Garamond } from 'next/font/google'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-eb-garamond'
})

export const metadata = {
  title: 'NaviStarq | Strategic Consulting & Transformation',
  description: 'Navigate complexity. Deliver clarity. Strategic consulting partners for organizations ready to solve challenges and achieve sustainable growth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${ebGaramond.variable} font-serif antialiased overflow-x-hidden w-full bg-black text-white`}>{children}</body>
    </html>
  )
}
