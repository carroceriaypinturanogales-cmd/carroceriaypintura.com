/** @type {import('next').NextConfig} */
const isCloudflarePages = process.env.CF_PAGES === '1' || process.env.NEXT_EXPORT === 'true'

const nextConfig = {
  output: isCloudflarePages ? 'export' : 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(!isCloudflarePages && {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
            { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
            { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          ],
        },
      ]
    },
  }),
}

export default nextConfig
