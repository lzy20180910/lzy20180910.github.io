# webpack配置文件
`webpack`已经内置了一些开箱即用的默认配置，但是这些配置往往无法满足我们的业务需求，所以我们需要自己配置。<br>
`webpack`的默认配置文件名为`webpack.config.js`，如果要自定义配置文件名，需要在执行打包命令的时候加入参数，`webpack --config 你的文件名`

## 配置详解
```js
const path = require('path')
module.exports = {
  entry: './src/index.js', // 打包入口文件，这其实是{ main: './src/index.js' }的简写
  output: { // 打包好的文件输出配置
    filename: 'bundle.js', // 打包好的文件名要叫什么
    path: path.resolve(__dirname, 'bundle') // 打包好的文件要放在哪个地方，这里要使用绝对路径，所以用path.resolve来生成，__dirname表示当前文件所在的路径
  }
}
```
