/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PIXELS_API_KEY: process.env.PIXELS_API_KEY,
    HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL,
    ANALYTICS_URL: process.env.ANALYTICS_URL,
    ANALYTICS_ID: process.env.ANALYTICS_ID,
    ADSENSE_URL: process.env.ADSENSE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cars.tatamotors.com",
      },
    ],
  },
};

module.exports = nextConfig;
