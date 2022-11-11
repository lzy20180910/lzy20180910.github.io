# 媒体查询
媒体查询可以用来根据不同的媒体类型定义不同的样式

## 常用媒体类型
| 值        | 描述           |
| --------  |:-------------:|
| all	      | 用于所有媒体类型设备。  |
| print	    | 用于打印机。 |
| screen	  | 用于计算机屏幕、平板电脑、智能手机等等。 |

## 媒体类型常用的引用方法
1.link标签：<br>
```html
// 表示当媒体类型是`screen`并且屏幕宽度大于等于`600px`的时候，引入style.css样式
<link rel="stylesheet" media="screen and (min-width:600px)" href="style.css" />
```
2.@meida 方式<br>
在样式文件中引入媒体类型：
```css
@media screen {
    /*具体样式*/
}
```
在style标签中引入媒体类型:
```html
<style>
    @media screen {
      /*具体样式*/
  }
</style>
```


## 媒体查询语法
媒体查询由一种媒体类型组成，并可包含一个或多个表达式，这些表达式可以解析为 true 或 false，当媒体查询为 true 时，将应用相应的样式表或样式规则
```css
@media not|only mediatype and (expressions) {
  CSS-Code;
}
```
`not` 关键字<br>
`not`关键字可以用来排除某种媒体特性，例如：
```css
/*样式代码将生效于除了打印设备并且屏幕宽度大于等于400px时生效*/
@meida not print and (min-width:400px) {
  /* 具体样式 */
}
```

`only`关键字<br>
`only`用来排除不支持媒体查询的浏览器，在不支持媒体查询的浏览器中解析到带`only`的媒体查询时，会将`only`视为媒体类型。（由于没有only这种媒体类型，因此将不会被应用）

`and` 关键字<br>
`and`用于将多个媒体特征组合到一个媒体查询中。它还用于将媒体功能与媒体类型连接起来。
```css
/* 在 screen 类型 大于560px 加载  */
@media screen and (min-width: 560px) {
  .box {
    background-color: red;
  }
}
/* 在 screen 类型 大于560px 小于 700px 加载 */
@media screen and (min-width: 560px) and (max-width: 700px) {
  .box1 {
    background-color: burlywood;
  }
}
```

## Demo演示
下面的例子在视口宽度为 480 像素或更宽时将背景颜色更改为浅绿色（如果视口小于 480 像素，则背景颜色会是粉色）：

::: demo
media/basic
:::

