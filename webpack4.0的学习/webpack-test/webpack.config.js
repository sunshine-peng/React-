
/**
 * HMR hot module replacement  热模块替换 / 模块热替换
 * 作用：一个模块发生变化，只会重新打包这一个模块(而不是打包所有模块)
 * 极大的提升了构建速度
 * 样式文件可以使用HRM 因为style-loader内部实现了
 * js:默认不使用HMR功能--->修改js代码，添加支持HMR功能的代码
 * 注意：HMR功能对js的处理--->只能处理非入口js文件的其他文件。
 * html：默认不能使用HRM功能，同时会导致问题：HTML文件不能热更新了~（
 * 不需要做热更新功能，因为只有一个html文件）
 * 解决： 修改entry入口，将html文件引入
 * 注意：生产环境不能使用HMR,使用缓存
 */
/**
 * 缓存
 * babel缓存
 * cacheDirectory:true
 * 文件资源缓存
 * hash:每次webpack会产生唯一一个hash值
 * 问题：因为js和css使用同一个hash值。
 * 如果重新打包，会导致所有缓存失效(可能我只改变一个文件)
 * chunkhash：根据chunk生成的hash值，如果打包来源于同一个chunk，那么hash值就一样
 * 问题：js和css的值还是一样的，因为css是在js中被引入的，所以同属于一个chunk
 * contenthash:根据文件的内容生成hash,不同文件hash值不一样；
 * 
 */

 /**
  * tree shaking:去除无用代码
  * 前提：1.必须使用ES6模块化 2.开启production环境
  * 作用：减少代码体积
  * 
  * 在package.json中配置
  * 'sideEffects':false 所有代码都没有副作用（都可以进行 tree shaking ）
  * 问题：可能会把css/@babel/polyfill(副作用)文件干掉
  * "sideEffects":["*.css"]//排除所有的css文件
  */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PostcssPresetEnv = require('postcss-preset-env')
const TerserWebpackPlugin=require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const WorkboxWebpackPlugin=require('workbox-webpack-plugin')
const AddAssetHtmlWebpackPlugin=require('add-asset-html-webpack-plugin')
const {
    resolve
} = require('path')
const webpack = require('webpack')
process.env.NODE_ENV = 'development'
module.exports = {
    //单入口文件
    entry: './src/index.js',
    //代码分割
    //多入口文件打包，将多入口文件分割成多个模块
    //问题：不能将公共代码分割，导致公共代码重复加载，增大代码体积
    // entry:{
    //     index:"./src/print.js",
    //     test:"./src/index.js"
    // },
    // entry: ['./src/index.js','./src/index.html']//开启html文件的热更行
    output: {
        path: resolve(__dirname, 'build'),
        // filename: 'bundle.js'
        filename: 'bundle.[hash:9].js'
        // filename: '[name].js'

        //所有资源引入公共路径前缀---> img/a.jpg -->/img/a.jpg
        // ,publicPath:'/'

        ,chunkFileName:'[name]._chunk.js'//非入口chunk的名字（import动态引入）

    },
    module: {
        rules: [
            /**
                     * 正常来讲，一个文件只能被一个loader处理，
                     * 当一个文件被多个loader处理，那么一定要指定loader的执行顺序，
                     * 先执行eslint在执行babel
                    //  */
                    {
                        //
                        test: /\.js$/,
        
                        /**
                         * eslint是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，
                         * 它的目标是保证代码的一致性和避免错误。（官方翻译）
                         * exclude排除node_moudles的检查，eslint语法检查需要
                         * eslint eslint-loader eslint-config-airbnb-base 
                         * eslint-plugin-import四个搭配使用，还需要在package.json中
                         * 配置eslintConfig--->"eslintConfig":{
                                       "extends":"airbnb-bas" },
                                       airbnb为编码规范（学习）github下载
                                       fix:true为自动修改代码，使代码规范
                                       enforce:'pre'指定哪个loader先执行
                         */
                        exclude: /node_moudles/,
                        enforce: "pre",
                        loader: 'eslint-loader',
                        options: {
                            fix: true
                        }
                    },
            {
                /**
                 * oneOf的意思是以下loader只会匹一个
                 * 不能有两个loader处理同一类型的文件，
                 * 如果有多个loader要处理同一类型的文件，需要提取
                 * 出其他loader放到oneOf外面，直留一个loader在里面
                 * oneOf能够提升代码的构建速度
                 */
                oneOf:[
                    {
                        test: /\.css$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            /**
                             * css-loader---->css-loader是从入口文件中将css文件转换成javascript
                             *能够识别的文件，style-loader===>syle-loader是在html文件中创建style标签
        
                             */
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    ident: 'postcss',
                                    plugins: () => [
                                        /*
                                    postcss-preset-env---->是处理css3对浏览器兼容性的问题、
                                    可以对css3的某些属性增加前缀，处理兼容问题，
                                    还需要配置browserslist:{
                                        "development":[
                                            "last 2 chrome version",
                                            "last 2 firefox version",
                                            "last 2 safari version",
                                        
                                        ],
                                        production:[
                                            ">0.1%",
                                            "not dead",
                                            "not op_mini all"
                                        ]
                                    }
                                  指定browserslist在哪种环境下起作用,需要设置process.env.NODE_ENV的值
                                  "development"在开发环境下起作用，"production"在生产环境下起作用
                                    */
                                        require('postcss-preset-env')()
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        test: /\.(jpg|png|gif)/,
                        //url-loader--->url-loader是基于file-loader设计的，增加了limit
                        //属性，对图片大小进行判断，然后选择对其进行编码操作
                        //esModule:false是关闭escript语法，因为html-loader采用的是commonjs
                        //进行解析的，必须同步
                        //outputPath配置是将文件输出的路径
                        //hash:8文件名字使用8位的hash值命名，ext是源文件的扩展名
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            esModule: false,
                            name: '[hash:8].[ext]'
        
                        }
                    },
                    /**
                     * html-loader--->html-loader是为了解析html里面加载的图片
                     */
                    {
                        test: /\.html$/,
                        loader: "html-loader"
        
                    },
                    {
                        test: /\.(eot|svg|ttf|woff|woff2)/,
                        loader: 'file-loader'
                    },
                    
                    /**
                     * JS兼容处理安装babel-loader @babel/core @babel/preset-env
                     * babel-loader--->babel-loader是npm的一个包，它使得webpack可以
                     * 通过babel转义javascript语句，
                     * @babel/core---->@babel/core这是babel的核心库，负责解析。
                     * @babel/preset-env--->@babel/preset-env负责各种插件的打包组合，
                     * 各种转义规则的统一设定，目的是告诉loader要以什么规则转来转化成对应的js版本
                     * 1、基本js的兼容处理--->@babel/preset-env只能转化基本语法，高级语法不能不能转换
                     * 2、全部js的兼容处理--->将全部兼容代码引入，会增大体积（不考虑使用）
                     * 3、按需加载js的兼容处理--->core-js只加载需要处理的js兼容代码（配合@babel/preset-env使用）
                     */
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use:[
                            {

                                /**
                                 * 多进程打包
                                 * 进程启动大概600ms，进程通信也有开销
                                 * 只有工作时间消耗比较长，才需要多进程打包(比如有大量的js文件)
                                 */
                                loader:'thread-loader',
                                options:{
                                    workers:2
                                }
                            },
                            {
                                loader: 'babel-loader',
                                //只使用@babel/preset-env处理兼容的代码
                                // options:{
                                //     presets:['@babel/preset-env']
                                // }
                                //使用@babel/preset-env和core-js处理js兼容
                                options: {
                                    //预设指示babel做怎样的兼容处理
                                    presets: [
                                        ['@babel/preset-env',
                                            {
                                                //按需加载
                                                useBuiltIns: 'usage',
                                                //指定core-js版本
                                                corejs: {
                                                    version: 3
                                                },
                                                //指定兼容性做到哪个版本浏览器
                                                targets: {
                                                    chrome: '60',
                                                    firefox: '60',
                                                    ie: '9',
                                                    safari: '10',
                                                    edge: '17'
                                                }
                                            }
                                        ]
                                    ],
                                    //开启babel缓存，
                                    //会读取之前的缓存
                                    //此方法会强制缓存文件，是的文件在缓存期间内无法被改变
                                    //解决方法，每次要更新就给要更新的文件改变名字
                                    cacheDirectory:true
                                }
                            }]
                      
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            //告诉webpack哪些库不参与打包，同时使用是的名称也得变
            manifest:resolve(__dirname,'dill/manifest.json')
        }),
        // //在HTML加载指定的资源
        // new AddAssetHtmlWebpackPlugin({
        //     filepath:resolve(__dirname,'dill/jquery.js')
        // })
        // ,

        //生成HTML文件
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            //压缩html代码
            //压缩js代码只需要将mode改为production
            minify: {
                //清除空格
                collapseWhitespace: true,
                //清除评论
                removeComments: true
            }
        }),

        //将css从js文件抽取出来，//自带了一个loader分析处理css文件
        new MiniCssExtractPlugin({
            filename: "bundle.[hash:9].css"
        }),
        //压缩抽取出来的css文件
        new OptimizeCssAssetsWebpackPlugin(),
        // new webpack.HotModuleReplacementPlugin()
        new WorkboxWebpackPlugin.GenerateSW({
            /**
             * 1、帮助serviceworker快速启动
             * 2、删除旧的serviceworker
             * 生成一个serviceworker配置文件
             */
            clientsClaim:true,
            skipWaiting:true
        })
    ],
    /**
     * 代码分割
     * 1.可以将node_modules中代码单独打包一个chunk最终输出
     * 2.自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独的一个文件
     */
    optimization:{
        splitChunks:{
            chunks:'all',
            minSie:30*1024 ,//分割的chunk最小为30kb
            maxSize:0,//最大没有限制
            minChunks:1,//要提取的chunk至少被引用一次
            maxAsyncRequests:5 ,//按需加载时并行加载的文件的最大数目
            maxInitialRequests:3,//入口js文件最大并行请求数量
            automaticNameDelimiter:'~',//名称连接符
            name:true,//可以使用命名规则
            cacheGroups:{//分割chunk的组
                //node_modules文件会被打包到vender组的chunk中--->vender~xxx.js
                //满足上面的公共规则
                vendors:{
                    test:/[\\/]node_modules[\\/]/,
                    //优先级
                    priority:-10,

                },
                default:{
                    //要提取的chunk至少被引用两次，
                    minChunks:2,
                    //优先级
                    priority:-20,
                    //如果当前要打包的模块，和之前已经被提取的模块是同一个模块，
                    //就会复用，而不是重新打包
                    reuseExistingChunk:true
                }
            }

        },
        //将当前模块的记录的其他模块的hash单独打包为一个文件runtime
        runtimeChunk:{
            name:entrypoint => `runtime-${entrypoint.name}`
        },
        minimizer:[
            //配置生产环境的压缩方案：js和css

            new TerserWebpackPlugin({
                //开启缓存
                cache:true,
                //开启多进程打包
                parallel:true,
                //开启source-map
                sourceMap:true

            })
        ]
    }
    ,
    mode: 'production',
    //解析模块规则
    resolve:{
        //配置解析模块路径别名：优点简写路径 缺点路径没提示
        alias:{
            css$:resolve(__dirname,'src/css')
        },
        //配合省略文件路径的后缀名
        extensions:['.js','.json','jsx'],
        //告诉webpack解析模块是去哪个目录找
        modules:[resolve(__dirname,'./node_modules'),'node_modules']

    },
    externals:{
        //当html使用cdn的方式引入第三方的库时，
        //可以使用externals拒绝被引入的库进行打包，加快打包速度
        jquery:'jQuery'
    },
    devServer: {

        watchContentBase:true,
        watchOptions:{
            //忽略文件，不监视node_modules中的文件
            ignored:/node_modules/
        },
        //运行代码的目录
        contentBase: resolve(__dirname, 'build'),
        port: 3000,
        open: true,
        compress: true,
        // hot:true//开启热更新功能
        //不要显示启动服务器的日志信息
        clientLogLevel:'none',
        //除了一些基本启动信息以外，其他内容都不要显示
        quiet:true,
        //如果出错了，不要全屏提示
        overlay:false,
        proxy:{
            //一旦devserver服务器接受到/api/xxx的请求，就会把请求发送到另外一个服务器上
            '/api':{
                target:'http://localhost:3000',
                //发送请求时，路径重写：将/api/xxx--->/xxx(去掉/api)
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    },
    // devtool:'inline-source-map'
}

/**
 * source-map:一种提供源代码到构建后代码的映射技术(如果构建后代码错了，通过映射
 * 可以追踪到源代码错误的信息和错误位置)
 * [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
 * source-map:外部创建.map文件
 * 错误代码准确信息，和源代码错误位置
 * inine-source-map:内联，外部不生成.map文件
 * 只生成一个内部的source-map
 * 错误代码准确信息，和源代码的错误位置
 * hidden-source-map:外部
 * 错误代码原因，带没有错误代码的位置
 * 不能追踪源代码错误，只能提示到构建后的代码的错误位置
 * eval-source-map：内联
 * 每一个文件都生成对应的source-map,都在eval
 * 错误代码准确信息，和源代码的错误位置
 * nosources-source-map:外部创建
 * 错误代码准确信息，但没有任何源代码的信息
 * cheap-source-map：外部
 * 错误代码准确信息，和源代码的错误位置
 * 只能精确到行
 * cheap-module-source-map:外部创建
 * 错误代码准确信息，和源代码的错误位置
 * module会将loader中的source-map加入
 * 
 * 内联和外部的区别：
 * 1、外部生成了.map文件，内联没有
 * 2、内联构建速度更快
 * 
 * 开发环境：要求速度快，调试友好
 * 速度快：(eval>inline>cheap>...)
 * eval-cheap-source-map
 * eval-source-map
 * 
 * 调试更友好：
 * source-map
 * cheap-module-source-map
 * cheap-source-map
 * 
 * -->eval-source-map(开发环境优选) / eval-cheap-module-source-map
 * 
 * 生产环境：源代码要不要隐藏，调试要不要更友好
 * 内联会让代码体积更大，所以生产环境不用内联
 * nosources-source-map 代码全部隐藏
 * hidden-source-map 只会隐藏源代码，会提示构建后代码错误信息
 * 
 * -->source-map(调试更友好，生产环境优选) / cheap-module-source-map(速度快)
 * 
 */