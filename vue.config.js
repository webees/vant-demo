var vueServe = require('./vue.serve')
var vueBuild = require('./vue.build')

const IS_DEV = process.env.NODE_ENV === 'production' ? false : true
const CDN_BASE = '//' + process.env.VUE_APP_CDN_DOMAIN + '/' + process.env.VUE_APP_QINIU_PATH + '/'

module.exports = {
  publicPath: IS_DEV ? '/' : CDN_BASE,
  productionSourceMap: IS_DEV,
  integrity: true,
  css: {
    extract: false, // 不提取css
    sourceMap: IS_DEV,
    loaderOptions: {}
  },
  devServer: {
    open: true,
    port: 8888,
    proxy: null
  },
  configureWebpack: {
    externals: {
      'vue-router': 'VueRouter',
      'vue-i18n': 'VueI18n',
      'vue-meta': 'VueMeta',
      vue: 'Vue',
      vuex: 'Vuex',
      axios: 'axios',
      vant: 'Vant'
    }
  },
  chainWebpack: webpackConfig => {
    IS_DEV ? vueServe(webpackConfig) : vueBuild(webpackConfig)
  }
}
