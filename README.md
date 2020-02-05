# Vue.js写的一个移动端新闻
学Vue，动手仿造撸了一个项目，项目可能不成熟，请大家多提意见
有一个bug就是搜索的时候网络请求比较慢
## 技术栈
**Vue2**：采用最新Vue2的语法

**Vuex**：状态管理，实现不同组件之间的状态共享

**vue-router**：路由管理，实现路由的跳转

**axios**：发起http请求

**Express**：处理跨域请求问题 （百度了参考教程）

**Webpack**：自动化构建工具，大部分配置vue-cli脚手架已经弄好了，很方便

**淘宝flexible**：通过改变font-size,利用rem解决移动端适配问题

## 使用 

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 遇到的问题
* 布局问题：在做项目之前，应该构思好大致的布局结构，各个组件的结构设计与联系要想好，做这个项目就是布局出了问题，导致后面要修改一大堆的东西。
* 异步编程问题：项目使用了极速数据的API，后端的API编写也要解决请求数据的异步问题，因为对这个还不是很熟所以很多东西都参考了百度，JS实现异步的方法有`回调`、`Generator`(参考百度)、`Promise`、`Async`（参考百度）等技术 但是回调多了 容易造成会掉地狱。
  
* 组件之间通信问题: 父组件可以通过props属性给子组件通信，子组件通过监听、触发事件向父组件通信，兄弟组件vuex，vuex将状态集中管理.



