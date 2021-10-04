const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = () => {
  const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
