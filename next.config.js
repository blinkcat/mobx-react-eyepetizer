const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const prod = process.env.NODE_ENV === 'production';
const DEPLOY_PREFIX = prod ? '/mobx-react-eyepetizer' : '';
const { ANALYZE } = process.env;

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/detail': { page: '/detail' }
    };
  },
  // for gh-pages
  assetPrefix: DEPLOY_PREFIX,
  webpack: function(config) {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true
        })
      );
    }
    // feel bad  https://github.com/zeit/next.js/issues/2759
    config.output.publicPath = `${DEPLOY_PREFIX}${config.output.publicPath}`;
    return config;
  }
};
