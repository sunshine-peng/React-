
/**
 * 使用dll技术，对某些库（第三方库：jquery、react、vue）
 * 当你运行webpack时，默认运行webpack.config.js文件
 * 需求：运行webpack.dill.js文件
 * -->webpack --config webpack.dill.js
 */
const {resolve}=require('path')
const Webpack=require('webpack')

module.exports={
entry:{
    //最终生成的[name]--->jquery
    //['jquery']最终要打包的库
    jquery:['jquery']
},
output:{
    filename:'[name].js',
    path:resolve(__dirname,'dill'),
    library:'[name]_[hash]'//打包的库向外暴露的内容叫什么名字
},
plugins:[
    new Webpack.DllPlugin({
        //打包生成一个manifest.json---->提供jquery映射
        name:'[name]_[hash]',//映射库的暴露的内容名称
        path:resolve(__dirname,'dill/manifest.json')//输出文件路径

    })
],
mode:"production"
}