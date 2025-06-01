/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config, { isServer }) => {
    // Add any webpack customizations here
    return config
  },
  // Ensure proper handling of static files
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Disable x-powered-by header
  poweredByHeader: false,
}

module.exports = nextConfig 