var path = require('path')
var BundleTracker = require('webpack-bundle-tracker')
const CONF = require('./config')
module.exports = {
  outputDir: path.resolve(CONF.output),
  runtimeCompiler: true,
  pages: CONF.entries,
  publicPath: process.env.NODE_ENV === 'production'
    ? CONF.production.assetsPublicPath
    : CONF.dev.assetsPublicPath,
  chainWebpack: config => {
    config.optimization
      .splitChunks(false)
    config
      .plugin('BundleTracker')
      .use(BundleTracker, [{ filename: CONF.tracker }])
    config.resolve.alias
      .set('__STATIC__', CONF.static_folder )
    config.devServer
      .publicPath(CONF.dev.assetsPublicPath)
      .proxy(CONF.dev.proxyTable)
      .host(process.env.HOST || CONF.dev.host)
      .port(process.env.PORT || CONF.dev.port)
      .hot(true)
      .watchOptions({ poll: 1000 })
      .https(false)
      .open(CONF.dev.autoOpenBrowser)
      .headers({ 'Access-Control-Allow-Origin': ['\*'] })
  }

}
