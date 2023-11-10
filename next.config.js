/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    api: {
      clothes: 'https://run.mocky.io/v3/da881dda-b416-4498-a52f-4f3f6da7dacf',
    },
  },
  images: {
    domains: ['assets.mayoral.com'],
  },
};

module.exports = config;
