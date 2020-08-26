// vue.config.js
module.exports = {
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-plugin-px2rem')({
                        rootValue:75, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
                        // unitPrecision: 5, //允许REM单位增长到的十进制数字。
                        //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                        // propBlackList: [], //黑名单
                        // exclude: /(page_pc)/i,  //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                        exclude: /node_modules/i,
                        // selectorBlackList: ['van-'], //要忽略并保留为px的选择器,我们一般不转换vantui中的大小
                        // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
                        // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
                        mediaQuery: false,  //（布尔值）允许在媒体查询中转换px。
                        minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
                    }),
                ]
            }
        }
    },
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/smile-client/',
    devServer: {
        host: 'localhost',
        port: 8080,
        open: true,
        hotOnly: true, // 热更新
        proxy: {
            '/api': { // 本地服务器配置代理转发
                target: 'http://192.168.1.17:8888',
                changeOrigin: true,
                ws: false,
                pathRewrite:{
                    '^/api':''    //这里理解成用‘/api'代替target里面的地址，后面组件中我们调接口时直接用api代替 比如我要调用'http://codetpx.lncwkj.com/xxx/duty?age=30'，可在axios的url中直接写‘smile-client/xxx/duty?age=30'即可
                }                
            }          
        } // 设置代理
    },
  

}