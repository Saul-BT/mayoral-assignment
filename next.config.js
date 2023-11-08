/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    api: {
      clothes: '/api/clothes',
    },
  },
  images: {
    domains: ['assets.mayoral.com'],
  },
};

module.exports = config;
