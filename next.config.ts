/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,

  experimental: {
    turbo: {
      loaders: {
        "*": {
          sourceMaps: "inline",
        },
      },
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
