const { defineConfig } = require('@vue/cli-service')
const target = "http://localhost:3000"; //protocol~port까지
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: { 
      '^/api': { //시작하는 경로가 /api 인 곳에만 proxy 적용
        target,
        changeOrigin: true,
        ws: false, //웹소켓 우리는 지금 안 씀
        pathRewrite: { '^/api': '/' }//origin교체는 되었지만 404경로오류발생 /api가 없기 때문에 
                                    //=> 경로 '/'로 덮어쓰기
      }
    }
  }
})
