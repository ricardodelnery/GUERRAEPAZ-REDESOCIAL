/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['placehold.co'],
    unoptimized: true
  },
  // Desabilitar SSG problemático
  output: 'standalone',
  trailingSlash: true,
  // Timeout aumentado
  staticPageGenerationTimeout: 120,
}

module.exports = nextConfig
