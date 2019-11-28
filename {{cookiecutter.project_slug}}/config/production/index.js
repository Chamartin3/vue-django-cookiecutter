'use strict'
// Template version: 1.2.3
// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')
module.exports =  {
    index: path.resolve(__dirname, '../static/js/index.html'),
    assetsRoot: path.resolve(__dirname, '../static/js/'),
    assetsSubDirectory: '',
    assetsPublicPath: '/static/js/',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
