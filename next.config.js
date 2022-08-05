const withPlugins = require('next-compose-plugins');

const nextConfig = {
  dir: 'src',
  reactStrictMode: true,
  images: {
    domains: ['ikzttp.mypinata.cloud'],
  },
};

module.exports = withPlugins([], nextConfig);
