# Flexbox
弹性框布局模块，可以更轻松地设计灵活的响应式布局结构，而无需使用浮动或定位。

## 父元素（容器）
通过将 `display` 属性设置为 `flex`，`flex` 容器将可伸缩：
::: demo
flexbox/basic
:::

`flex` 容器属性：<br>
`flex-direction`<br>
`flex-wrap`<br>
`flex-flow`<br>
`justify-content`<br>
`align-items`<br>
`align-content`<br>

## `flex-direction` 属性
作用：定义容器要在哪个方向上堆叠 `flex` 项目。<br>
常用属性值及效果说明：<br>
`column` 值设置垂直堆叠 `flex` 项目（从上到下）：<br>
`column-reverse` 值垂直堆叠 `flex` 项目（但从下到上）：<br>
`row` 值水平堆叠 `flex` 项目（从左到右）：<br>
`row-reverse` 值水平堆叠 `flex` 项目（但从右到左）：<br>
::: demo
flexbox/flexDirection
:::

## `flex-wrap` 属性
作用：规定是否应该对 flex 项目换行。<br>
常用属性值及效果说明：<br>
`wrap` 值规定 `flex` 项目将在必要时进行换行：<br>
`nowrap` 值规定将不对 `flex` 项目换行（默认）：<br>
::: demo
flexbox/flexWrap
:::

## `flex-flow` 属性
`flex-flow` 属性是用于同时设置 `flex-direction` 和 `flex-wrap` 属性的简写属性。

## `justify-content` 属性
作用：用于对齐 `flex` 项目：<br>
常用属性值及效果说明：<br>
`center` 值将 flex 项目在容器的中心对齐：<br>
`flex-start` 值将 flex 项目在容器的开头对齐（默认）：<br>
`flex-end` 值将 flex 项目在容器的末端对齐：<br>
`space-around` 值显示行之前、之间和之后带有空格的 flex 项目：<br>
`space-between` 值显示行之间有空格的 flex 项目：<br>
::: demo
flexbox/justifyContent
:::

## `align-items` 属性
作用：用于垂直对齐 `flex `项目。<br>
常用属性值及效果说明：<br>
`center` 值将 `flex` 项目在容器中间对齐：<br>
`flex-start` 值将 `flex` 项目在容器顶部对齐：<br>
`flex-end` 值将弹性项目在容器底部对齐：<br>
`stretch` 值拉伸 `flex` 项目以填充容器（默认）：<br>
::: demo
flexbox/alignItems
:::

## `align-content` 属性
作用：用于对齐弹性线。<br>
常用属性值及效果说明：<br>
`space-between` 值显示的弹性线之间有相等的间距：<br>
`space-around` 值显示弹性线在其之前、之间和之后带有空格：<br>
`stretch` 值拉伸弹性线以占据剩余空间（默认）：<br>
`center` 值在容器中间显示弹性线：<br>
`flex-start` 值在容器开头显示弹性线：<br>
`flex-end` 值在容器的末尾显示弹性线：<br>
::: demo
flexbox/alignContent
:::

## 子元素（项目）
`flex` 容器的直接子元素会自动成为弹性（flex）项目。<br>
用于弹性项目的属性有：<br>
`order`<br>
`flex-grow`<br>
`flex-shrink`<br>
`flex-basis`<br>
`flex`<br>
`align-self`<br>

## `order` 属性
`order` 属性可以改变 `flex` 项目的顺序。`order` 值必须是数字，默认值是 0。
::: demo
flexbox/order
:::

## `flex-grow` 属性
该属性用来设置当父元素的宽度大于所有子元素的宽度的和时（即父元素会有剩余空间），子元素如何分配父元素的剩余空间。 `flex-grow`的默认值为0，意思是该元素不索取父元素的剩余空间，如果值大于0，表示索取。值越大，索取的越厉害。<br>

举个例子: 父元素宽400px，有两个子元素：A和B。A宽为100px，B宽为200px。 则空余空间为 400-（100+200）= 100px。 如果A，B都不索取剩余空间，则有100px的空余空间。如果A，B都设索取剩余空间，A设置`flex-grow`为1，B设置`flex-grow`为2。则最终A的大小为 自身宽度（100px）+ A获得的剩余空间的宽度（100px/(1/(1+2))）,最终B的大小为 自身宽度（200px）+ B获得的剩余空间的宽度（100px/(2/(1+2))）
::: demo
flexbox/flexGrow
:::

## `flex-shrink` 属性
该属性用来设置，当父元素的宽度小于所有子元素的宽度的和时（即子元素会超出父元素），子元素如何缩小自己的宽度的。 当父元素的宽度小于所有子元素的宽度的和时，子元素的宽度会减小，`flex-shrink`设置的值越大，减小的越厉害。如果值为0，表示不减小。<br>

举个例子: 父元素宽400px，有两子元素：A和B。A宽为200px，B宽为300px。 则A，B总共超出父元素的宽度为(200+300)- 400 = 100px。 如果A，B都不减小宽度，即都设置`flex-shrink`为0，则会有100px的宽度超出父元素。
::: demo
flexbox/flexShrink1
:::
如果A不减小宽度:设置flex-shrink为0，B减小。则最终B的大小为 自身宽度(300px)- 总共超出父元素的宽度(100px)= 200px
::: demo
flexbox/flexShrink2
:::
如果A，B都减小宽度，A设置`flex-shirk`为3，B设置`flex-shirk`为2。则最终A的大小为 自身宽度(200px)- A减小的宽度(100px * (200px * 3/(200 * 3 + 300 * 2))) = 150px,最终B的大小为 自身宽度(300px)- B减小的宽度(100px * (300px * 2/(200 * 3 + 300 * 2))) = 250px
::: demo
flexbox/flexShrink3
:::

## `flex-basis` 属性
`flex-basis` 属性规定 `flex` 项目的初始长度。设置了这个属性，`width`属性就会无效。<br>
下面的例子将第三个弹性项目的初始长度设置为 200 像素：
::: demo
flexbox/flexBasis
:::

## `flex` 属性
`flex` 属性是 `flex-grow`、`flex-shrink` 和 `flex-basis` 属性的简写属性。


## `align-self` 属性
`align-self` 属性规定弹性容器内所选项目的对齐方式。<br>
`align-self` 属性将覆盖容器的 `align-items` 属性所设置的默认对齐方式。
::: demo
flexbox/alignSelf
:::




