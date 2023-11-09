# webpack是什么
`webpack`是一个模块打包工具，可以把多个模块打包在一起

## 前端编程方式发展史
远古时期的开发方式：`html+css+js`
`index.html`文件：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
  <script src="./moduleA.js"></script>
  <script src="./moduleB.js"></script>
  <script src="./moduleC.js"></script>
  <script src="./index.js"></script>
</body>
</html>
```

`index.js`文件：
```js
moduleA()
moduleB()
moduleC()
```

`moduleA.js`文件：
```js
function moduleA() {
  console.log('这是moduleA.js文件的内容')
}
```

`moduleB.js`文件：
```js
function moduleB() {
  console.log('这是moduleB.js文件的内容')
}
```

`moduleC.js`文件：
```js
function moduleC() {
  console.log('这是moduleC.js文件的内容')
}
```

这样的方式有很多缺点：
>- 引入多个js文件，无法直观的看出各个js文件之间的关系，无法直观的看出某些代码来自于哪个js文件
>- 不易排错，比如引入js文件顺序出错
>- 一个html引入多个js文件，会触发多个http请求，影响页面加载速度

## 用`webpack`解决上面的问题：
`index.html`文件：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
  <script src="./index.js"></script>
</body>
</html>
```

`index.js`文件：
```js
import moduleA from './moduleA.js'
import moduleB from './moduleB.js'
import moduleC from './moduleC.js'
moduleA()
moduleB()
moduleC()
```

`moduleA.js`文件：
```js
export default function moduleA() {
  console.log('这是moduleA.js文件的内容')
}
```

`moduleB.js`文件：
```js
export default function moduleB() {
  console.log('这是moduleB.js文件的内容')
}
```

`moduleC.js`文件：
```js
export default function moduleC() {
  console.log('这是moduleC.js文件的内容')
}
```

## 安装
建议局部安装，不要全局安装
```shell
npm install webpack webpack-cli -D
```

### webpack-cli的作用
使得我们可以在命令行里面输入`webpack`的命令