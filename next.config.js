/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: ["ca.slack-edge.com", "images.unsplash.com", "ttkwelkbrvhyabgfiaia.supabase.co"],
  },
    // 中間発表での表示を目的としてリダイレクトを設定
  async redirects() {
    return [
      {
        source: "/",
        destination: "/search",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
