import { Geist_Mono, Montserrat, Merriweather } from 'next/font/google'

import '@workspace/ui/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@workspace/ui/lib/utils'
import { Metadata } from 'next'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['400', '700'],
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Matheus Machado | Indie Hacker',
  description: '...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'antialiased',
        montserrat.variable,
        fontMono.variable,
        merriweather.variable,
        geistMono.variable,
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
