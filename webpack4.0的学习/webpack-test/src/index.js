import './css/common.css';
import './css/iconfont.css'; // import '@babel/polyfill'
// import { $ } from 'jquery';
import { $ } from 'jquery';
import { print } from './print';
// const add = function add(x, y) {
//   // eslint-disable-next-line的作用是下一行所有的规则都失效（生产环境不能使用）
//   // eslint-disable-next-line
//   console.log(x + y);
// };
console.log($);
// document.getElementById('btn').onclick=function(){
//   /**懒加载--->当文件需要时才加载
//    * 预加载prefetch:会在使用之前提前加载js文件
//    * 正常加载可以认为是并行加载（同一时间加载多个文件）
//    * 预加载prefetch:等其他资源加载完毕了，浏览器空闲了，在加载其他文件
//    *
//    */
//   import('./print')
//   .then(({add}) => {
//     //eslint-disable-next-line
//     console.log(add(9,55))
//   })
// }
print();

/**
 * 1、eslint不认识windowS、navigator全局变量
 * 需要修改package.josn文件的eslintConfig配置
 * "env":{
 * "browser":true//支持浏览器端全部变量
 * }
 * 2、sw代码必须运行在服务器上
 * --->nodejs
 * --->npm i serve -g
 * serve-s build 启动服务器，将build目录下 所有资源作为静态资源暴露出去
 */
// 注册serviceworker
// 处理兼容问题
if ('serviceworker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('sw注册成功了');
      })
      .catch(() => {
        console.log('sw注册失败了');
      });
  });
}
/**
 * 代码分割
 * 通过js代码，让某个文件被单独打包成一个chunk
 * import动态导入语法：能将某个文件单独打包；
 *
 */
// import(/*webpackChunkName:'test'./print')

//  .then(({add})=>{
//   // eslint-disable-next-line
//   console.log(add(4,9))
// })
// .catch(() => {
// })
// add(8, 4);
// eslint-disable-next-line
// console.log($);
// print();

// if (module.hot) {
//   // 一旦module,hot为true，说明HRM功能开启了，--->让HMR代码生效
//   module.hot.accept('./print.js', () => {
//   // 方法会监听print.js的变化，一旦发生变化，其他模块不会重新构建打包
//   // 会执行后面的函回调
//     print();
//   });
// }
