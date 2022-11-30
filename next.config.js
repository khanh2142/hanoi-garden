/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.flowercorner.vn", "shop.dalathasfarm.com"],
  },
};

module.exports = nextConfig;
