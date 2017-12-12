const prod = process.env.NODE_ENV === 'production';
const DEPLOY_PREFIX = prod ? '/mobx-react-eyepetizer' : '';

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
    // feel bad  https://github.com/zeit/next.js/issues/2759
    config.output.publicPath = `${DEPLOY_PREFIX}${config.output.publicPath}`;
    return config;
  }
};
