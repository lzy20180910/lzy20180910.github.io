# Box Sizing
`box-sizing` 属性允许我们在元素的总宽度和高度中包括内边距（填充）和边框。<br>
`box-sizing` 的常用属性值：<br>
`content-box`：`padding`和`border`不被包含在定义的`width`和`height`之内。<br>
盒子的实际宽度=设置的`width`+`padding`+`border`<br>
`border-box`：`padding`和`border`被包含在定义的`width`和`height`之内。<br>
盒子的实际宽度=设置的`width`（`padding`和`border`不会影响实际宽度）<br>

## 假如不指定 `box-sizing` 属性
默认情况下，元素的宽度和高度是这样计算的：<br>
width + padding + border = 元素的实际宽度<br>
height + padding + border = 元素的实际高度<br>
下例中展示了两个有相同指定宽度和高度的 `<div>` 元素：
::: demo
boxSizing/basic
:::

## 如果使用 `box-sizing` 属性
`box-sizing` 属性允许我们在元素的总宽度和高度中包括内边距和边框。<br>
如果在元素上设置了 `box-sizing: border-box;`，则宽度和高度会包括内边距和边框：
::: demo
boxSizing/borderBox
:::

