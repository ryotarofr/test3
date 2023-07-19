/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    appDir: true,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
