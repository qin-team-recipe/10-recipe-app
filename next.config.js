/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true, serverActions: true },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: [
      "ca.slack-edge.com",
      "images.unsplash.com",
      "ttkwelkbrvhyabgfiaia.supabase.co",
      "yt3.googleusercontent.com",
      "eee.tokyo-gas.co.jp",
      "chef-johjiro.com",
    ],
  },
};

module.exports = nextConfig;
