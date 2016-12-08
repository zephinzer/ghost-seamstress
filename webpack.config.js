const path = require('path');
const webpackConfigProvider = require('../../../../providers/webpack.config');
const environment = process.env.NODE_ENV || 'development';
console.log('Provisioning in', environment, 'environment');
module.exports = webpackConfigProvider[environment](path.join(__dirname, '/src/index.js'), __dirname);