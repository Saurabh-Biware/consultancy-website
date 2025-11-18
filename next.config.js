/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.giphy.com',
      },
      {
        protocol: 'https',
        hostname: '*.lottiefiles.com',
      },
      {
        protocol: 'https',
        hostname: 'illustrations.popsy.co',
      },
      {
        protocol: 'https',
        hostname: 'www.manypixels.co',
      },
    ],
  },
}

module.exports = nextConfig
