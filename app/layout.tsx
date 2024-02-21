import './global.scss'
import { notoSans, notoSansMono } from './fonts'
import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import SiteContainer from '@/components/SiteContainer'
import SiteMain from '@/components/SiteMain'
import SkipLink from '@/components/SkipLink'
import type { Viewport } from 'next'

export const viewport: Viewport = {
  colorScheme: 'light dark',
  initialScale: 1,
  themeColor: [
    { color: '#f5f5f5', media: '(prefers-color-scheme: light)' },
    { color: '#0a0a0a', media: '(prefers-color-scheme: dark)' },
  ],
  viewportFit: 'cover',
  width: 'device-width',
}

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL(`http://localhost:${process.env.PORT || 3000}`),
  title: {
    default: 'Bryan Wagman, Software Developer',
    template: '%s | Bryan Wagman',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={`${notoSans.variable} ${notoSansMono.variable}`}
      lang="en-US"
    >
      <body>
        <SiteContainer>
          <SkipLink />
          <SiteMain>{children}</SiteMain>
        </SiteContainer>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID as string} />
    </html>
  )
}
