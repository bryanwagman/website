import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: '#f5f5f5',
    description: 'Software developer based in New York City',
    display: 'minimal-ui',
    icons: [
      {
        purpose: 'maskable',
        sizes: 'any',
        src: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        purpose: 'maskable',
        sizes: '192x192',
        src: '/apple-icon.png',
        type: 'image/png',
      },
      {
        purpose: 'maskable',
        sizes: '512x512',
        src: '/icon.png',
        type: 'image/png',
      },
    ],
    name: 'Bryan Wagman, Software Developer',
    short_name: 'Bryan Wagman',
    start_url: '/',
    theme_color: '#f5f5f5',
  }
}
