# loader是什么
`webpack`默认只能识别解析js文件，当需要处理其它格式的文件，比如.vue、.jpg、.png等，就可以借助`loader`

## 如何配置loader
`webpack.config.js`：
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/, // 处理jpg、png、gif格式
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}
```
这样配置后，当解析到jpg格式的文件时，就会用`file-loader`来对其解析

## 常用loader
下面介绍一些项目中常用到的`loader`

### 处理图片的loader
#### file-loader
`file-loader`的作用是将文件复制到指定目录下（默认是dist目录），返回该文件的地址，可以处理任何格式的文件
```js
import avatar from './avatar.png'
console.log(avatar) // 得到的是图片的地址
```
在`webpack.config.js`中的配置：
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/, // 处理jpg、png、gif格式
        use: {
          loader: 'file-loader',
          options: {
            //name用来配置复制后的文件名称，
            // [name]、[hash]、[ext]都是占位符，[name]代表文件的原名称，[hash]代表该文件对应的哈希值、[ext]代表该文件的格式后缀
            // 默认情况下，生成文件的文件名，是文件内容的 MD5 哈希值，并会保留所引用资源的原始扩展名。
            name: '[name]_[hash].[ext]', // 除了字符串，还支持用函数处理

            // 代表复制的文件要输出到哪个文件夹，默认为dist
            outputPath: 'images/' // 除了字符串，还支持用函数处理
          }
        }
      }
    ]
  }
}
```

#### url-loader
`url-loader`的作用跟`file-loader`的作用很像，只不过它多了个`limit`的选项，当小于这个值的时候，会直接将其转为`base64`，而不是复制生成到指定目录下。在`webpack.config.js`中的配置：
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/, // 处理jpg、png、gif格式
        use: {
          loader: 'url-loader',
          options: {
            //name用来配置复制后的文件名称，
            // [name]、[hash]、[ext]都是占位符，[name]代表文件的原名称，[hash]代表该文件对应的哈希值、[ext]代表该文件的格式后缀
            // 默认情况下，生成文件的文件名，是文件内容的 MD5 哈希值，并会保留所引用资源的原始扩展名。
            name: '[name]_[hash].[ext]', // 除了字符串，还支持用函数处理

            // 代表复制的文件要输出到哪个文件夹，默认为dist
            outputPath: 'images/', // 除了字符串，还支持用函数处理

            limit: 102400 // 单位b，当小于这个值的时候，会直接将其转为`base64`，而不是复制生成到指定目录下
          }
        }
      }
    ]
  }
}
```

### 处理样式的loader
- 1.打包`css`文件的话需要用到`style-loader`，`css-loader`
- 2.如果要打包`scss`文件的话则需要再加上`scss-loader`
- 3.如果要使`css3`的属性自动加上厂商前缀的话再加上`postcss-loader`
使用`scss-loader`除了`scss-loader`，还需要再安装`node-sass`
```shell
npm install sass-loader node-sass --save-dev
```
在`webpack.config.js`中的配置：
```js
{
  test: /\.scss$/,
  use: [
    'style-loader', // 将 JS 字符串生成为 style 节点
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2, // 配置这个是为了嵌套@import其它scss文件时，依然会从后面再走2个loader
        // modules: true // 开启模块作用域，当以import style from './style.scss'的方式导出时，要使用类名的话：style.类名，且仅在当前模块生效
      }
    }
    'postcss-loader', // 自动把css3属性添加厂商前缀
    'sass-loader' // 将 Sass 编译成 CSS，默认使用 Node Sass
  ]
}
```
如果要使用`postcss-loader`自动把`css3`属性添加厂商前缀，还需要在根目录下添加一个`postcss.config.js`文件，并安装`autoprefixer`插件，并在里面写下如下代码：
```js
module.exports = {
  plugins: [
    // 使用autoprefixer插件来自动添加css3属性厂商前缀
    require('autoprefixer')({
      browsers: ['last 2 version', '>1%', 'ios 7']
    })
  ]
}
```

### 处理字体图标的loader
处理字体图标的话用`file-loader`,在`webpack.config.js`中的配置：
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(eot|ttf|svg)$/, // 处理字体图标格式
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}
```


