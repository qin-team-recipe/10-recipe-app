/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true, serverActions: true },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: ["ca.slack-edge.com", "images.unsplash.com", "ttkwelkbrvhyabgfiaia.supabase.co"],
  },
};

module.exports = nextConfig;
