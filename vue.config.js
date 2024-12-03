const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭语法检查
  transpileDependencies: [],
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'components': resolve('src/components'),
        'views': resolve('src/views')
      }
    }
  }
})
