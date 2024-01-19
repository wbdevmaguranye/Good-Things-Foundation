const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // Configuration here will be merged into the final webpack config
  },
  devServer: {
    // Configuration here will be merged into the final webpack dev server config
  },
})
