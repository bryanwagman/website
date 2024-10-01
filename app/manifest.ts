import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: '#f5f5f5',
    display: 'minimal-ui',
    icons: [
      {
        purpose: 'maskable',
        sizes: '512x512',
        src: '/icon.png',
        type: 'image/png',
      },
      {
        purpose: 'any',
        sizes: 'any',
        src: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    name: 'Bryan Wagman, Software Engineer',
    short_name: 'Bryan Wagman',
    start_url: '/',
    theme_color: '#f5f5f5',
  }
}
