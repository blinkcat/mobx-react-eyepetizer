const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/detail': { page: '/detail' }
    };
  },
  // for gh-pages
  assetPrefix: isProd ? '/mobx-react-eyepetizer/' : ''
};
