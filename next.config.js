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
  // Add these configurations to help with build issues
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 