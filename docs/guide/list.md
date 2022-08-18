# 列表

## HTML 列表和 CSS 列表属性
在 HTML 中，列表主要有两种类型：<br>
无序列表（`<ul>`）- 列表项用的是项目符号标记<br>
有序列表（`<ol>`）- 列表项用的是数字或字母标记<br>
CSS 列表属性使您可以：<br>
为有序列表和无序列表设置不同的列表项标记<br>
将图像设置为列表项标记<br>

## 不同的列表项目标记
`list-style-type` 属性用来指定列表项标记的类型<br>
`list-style-type` 属性的常用属性值及效果说明<br>
`none` 不使用任何项目符号<br>
`disc` 默认值，实心圆<br>
`circle` 空心圆<br>
`square` 实心矩形<br>
`decimal` 数字1、2、3、4、5<br>
`decimal-leading-zero` 以0打头的数字，01、02、03、04、05<br>
`lower-alpha` 小写英文字母，a、b、c、d、e<br>
`upper-alpha` 大写英文字母，A、B、C、D、E<br>
`lower-roman` 小写罗马数字，ⅰ、ⅱ、ⅲ、ⅳ、ⅴ<br>
`upper-roman` 大写罗马数字，Ⅰ、Ⅱ、Ⅲ、Ⅳ、Ⅴ<br>
::: demo
list/listStyleType
:::

## 图像作为列表项标记
`list-style-image` 属性将图像指定为列表项标记：
::: demo
list/listStyleImage
:::
