/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: ["ca.slack-edge.com"],
  },
};

module.exports = nextConfig;
