import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Taller de Carrocería y Pintura',
    short_name: 'Carrocería y Pintura',
    description:
      'Taller profesional de carrocería, pintura automotriz, pulido, cerámica y restauración en Nogales, Sonora.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0c0d10',
    theme_color: '#0c0d10',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
