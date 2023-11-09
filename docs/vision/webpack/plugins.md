# 什么是plugins
`plugins`即插件，`webpack`内它会像`vue`那样，对外暴露一些生命周期钩子，让你可以在这些生命周期内处理一些业务逻辑

## 常用的plugins

### 使用`html-webpack-plugin`和`clean-webpack-plugin`让打包更便捷
没有借助插件前，每次打包的时候都要手动删除`dist`文件夹，还得重新编写`index.html`文件，大大降低了开发效率，`html-webpack-plugin`和`clean-webpack-plugin`帮我们解决了这两个问题

#### html-webpack-plugin
作用：每次打包结束后会生成一个`index.html`文件。
在`webpack.config.js`配置文件中写如下代码：
```js
// HtmlWebpackPlugin插件可以在webpack打包结束后，自动生成一个html文件，并把打包后的js引入到该文件中
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html' // 指定模板文件，这样要在dist文件夹生成html文件时，会以这个src下的index.html作为模板，把打包好的js文件插入都里面，vue脚手架下打包后在dist文件夹下生成的index.html文件相信应该也是这样使用，以public文件夹下的index.html作为模板
    })
  ]
}
```

#### clean-webpack-plugin
作用：每次打包之前先删除`dist`文件夹
```js
// CleanWebpackPlugin插件可以在webpack打包之前，先删除指定的文件夹（具体删除哪个根据new CleanWebpackPlugin(['dist'])时传入的参数决定）
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  plugins: [
    new CleanWebpackPlugin(['dist']) // 这个插件可以在webpack打包之前，先删除指定的文件夹，比如这里是指定删除dist文件夹
  ]
}
```
