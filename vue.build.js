module.exports = webpackConfig => {
  webpackConfig.plugin('html').tap(([options]) => [
    Object.assign(options, {
      minify: {
        removeComments: true, // 是否去掉注释
        removeCommentsFromCDATA: true, // 移除来自字符数据的注释
        collapseWhitespace: true, // 是否去掉空格
        conservativeCollapse: false, // 删除空格，总是保留一个空格
        collapseInlineTagWhitespace: true, // 去除内联标签中的空格
        collapseBooleanAttributes: true, // 简化布尔属性
        removeRedundantAttributes: true, // 删除多余的属性
        removeAttributeQuotes: false, // 是否移除属性引号
        removeEmptyAttributes: true, // 移除空属性
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyJS: true, // 是否压缩html里的js
        minifyCSS: true // 是否压缩html里的css
      },
      inject: true,
      chunksSortMode: 'none'
    })
  ])

  // webpackConfig.plugin("qiniu").use(require("qn-webpack"), [
  //   {
  //     accessKey: process.env.VUE_APP_QINIU_ACCESS_KEY,
  //     secretKey: process.env.VUE_APP_QINIU_SECRET_KEY,
  //     bucket: process.env.VUE_APP_QINIU_BUCKET,
  //     path: process.env.VUE_APP_QINIU_PATH, // 存储路径，默认为[hash]，也可以指定hash长度，如：[hash:8]
  //     exclude: /index\.html$/,
  //     include: [
  //       /.*\.(js|css)$/,
  //       /.*\.(eot|woff|svg|ttf)$/,
  //       /.*\.(png|jpg|gif|ico)$/,
  //       /.*\.(mp3|wav)$/
  //     ],
  //     batch: 77, // 可选，批量上传文件并发数，默认20
  //     zone: process.env.VUE_APP_QINIU_ZONE // 可选，存储在七牛的机房（华东Zone_z0，华北Zone_z1，华南Zone_z2，北美Zone_na0）
  //   }
  // ]);
}
