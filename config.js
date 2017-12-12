// feel bad    https://github.com/zeit/next.js/issues/3335

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.DEPLOY_PREFIX': prod ? '/mobx-react-eyepetizer' : ''
};
