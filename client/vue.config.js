const { defineConfig } = require('@vue/cli-service')
const target = "http://localhost:3000"; //protocol~port까지

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: { 
      '^/api': {
        target,
        changeOrigin: true,
        ws: false, 
        pathRewrite: { '^/api': '/' }
      }
    }
  }
})
