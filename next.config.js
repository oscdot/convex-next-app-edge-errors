/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['backend'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'focused-labrador-262.convex.site',
      },
      {
        protocol: 'https',
        hostname: 'focused-labrador-262.convex.cloud',
      },
    ],
  },
}

module.exports = nextConfig
