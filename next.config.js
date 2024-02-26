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
        destination: '/careers/experiences',
        permanent: true,
      },
      {
        source: '/careers/experiences',
        destination: '/careers/experiences/portfolio',
        permanent: true,
      },
      {
        source: '/admin',
        destination: '/admin/careers',
        permanent: true,
      },
      {
        source: '/admin/careers',
        destination: '/admin/careers/codes',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.silverflame.dev',
        port: '',
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig
