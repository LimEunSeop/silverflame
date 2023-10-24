/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/careers/intro',
        permanent: true,
      },
    ]
  },
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig
