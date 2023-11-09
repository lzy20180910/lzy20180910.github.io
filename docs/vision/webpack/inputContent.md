# webpack打包后的输入内容含义解析
在用`webpack`打完包后会出现以下的输出内容，那么他们分别是什么意思呢？
<Gimage src="/vision/webpack/inputContent/img1.png"/>

```js
Hash: 92b1a422d5afd2fe4f47 // 表示本次打包的唯一哈希值
Version: webpack 4.26.0 // 本次打包的webpack版本
Time: 184ms // 本次打包所用的时间

Built at: 2023-05-16 10:10:58 // 打包时间
  Asset      Size  Chunks             Chunk Names
main.js  1.07 KiB       0  [emitted]  main
// Asset：打包后的文件，名称对应的是entry的key值
// Size：该文件对应的大小
// Chunks：该文件对应的id
// Chunk Names：该打包文件对应的入口文件，名称对应的是out.filename

Entrypoint main = main.js // 打包入口
[0] ./src/index.js + 3 modules 406 bytes {0} [built]
    | ./src/index.js 139 bytes [built]
    | ./src/moduleA.js 91 bytes [built]
    | ./src/moduleB.js 88 bytes [built]
    | ./src/moduleC.js 88 bytes [built]

// 下面是警告，意思是需要在配置文件中配置mode为production或者development，这两者的区别是development打包后是没有压缩代码的，production则会压缩代码
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
```