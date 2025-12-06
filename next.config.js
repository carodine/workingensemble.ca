/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true, // Cloudflare will handle image optimization
  },
  eslint: {
    // Disable ESLint during production builds to avoid circular dependency error
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Type check happens in CI/development, skip during production build
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig
