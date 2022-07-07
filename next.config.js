/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/freelance-website' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
