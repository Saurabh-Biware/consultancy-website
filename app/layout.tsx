import './globals.css'

export const metadata = {
  title: 'NaviStarq | Strategic Consulting & Transformation',
  description: 'Navigate complexity. Deliver clarity. Strategic consulting partners for organizations ready to solve challenges and achieve sustainable growth.',
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden w-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-serif antialiased overflow-x-hidden w-full bg-black text-white min-h-screen" suppressHydrationWarning style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
        <div className="min-h-screen bg-black w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
