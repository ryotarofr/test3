/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
