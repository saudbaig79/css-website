import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CSS — Film, Media & Production Services',
  description: 'CSS provides consultancy and services across the film and media industry, from location scouting and equipment rental to studio rental and marketing.',
  applicationName: 'CSS',
  authors: [{ name: 'CS Services Ltd t/a CSS' }],
  creator: 'CS Services Ltd t/a CSS',
  publisher: 'CS Services Ltd t/a CSS',
  openGraph: {
    title: 'CSS — Film, Media & Production Services',
    description: 'Consultancy and practical services for film and media projects.',
    type: 'website',
    siteName: 'CSS',
  },
  twitter: {
    card: 'summary',
    title: 'CSS — Film, Media & Production Services',
    description: 'Consultancy and practical services for film and media projects.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#111318',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
