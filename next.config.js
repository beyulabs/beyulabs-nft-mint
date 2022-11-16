// /* eslint-disable */
// eslint-disable-next-line import/no-extraneous-dependencies
const withPlugins = require('next-compose-plugins');
// eslint-disable-next-line import/no-extraneous-dependencies
// const Swiper = require('swiper/core');

const nextConfig = {
  dir: 'src',
  images: {
    domains: ['ikzttp.mypinata.cloud'],
  },
};

module.exports = withPlugins(
  [
    [
      {
        cssLoaderOptions: {
          esModule: true,
          sourceMap: false,
          modules: {
            mode: 'local',
          },
        },
      },
    ],
  ],
  nextConfig,
  // withSentryConfig(nextConfig, SentryWebpackPluginOptions),
  // Swiper
);
