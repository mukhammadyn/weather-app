const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@api': 'src/api',
    '@images': 'src/assets/img',
    '@store': 'src/app',
    '@utils': 'src/utils',
    '@assets': 'src/assets',
  })(config);

  return config;
};