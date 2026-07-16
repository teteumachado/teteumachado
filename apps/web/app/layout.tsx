import { Geist_Mono, Montserrat, Merriweather } from 'next/font/google'
import Script from 'next/script'

import '@workspace/ui/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@workspace/ui/lib/utils'
import type { Metadata } from 'next'

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
  metadataBase: new URL('https://matheusmachado.xyz'),
  title: 'Matheus Machado | Technology Enthusiast',
  description:
    'Personal portfolio and blog of Matheus Machado — building products at the intersection of software engineering, design, and Bayesian inference.',
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
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Matheus Machado',
              url: 'https://matheusmachado.xyz',
              sameAs: [
                'https://instagram.com/mmatheusmachadoo',
                'https://x.com/teteurocha28',
              ],
            }),
          }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Matheus Machado',
              url: 'https://matheusmachado.xyz',
            }),
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
