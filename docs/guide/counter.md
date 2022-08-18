# 计数器
`CSS` 计数器是由 `CSS` 保持的“变量”，其值可以通过 `CSS` 规则递增（以跟踪其使用次数）。<br>
计数器使您可以根据内容在文档中的位置来调整其外观。

## 带计数器的自动编号
`CSS` 计数器就像“变量”。变量值可以通过 `CSS` 规则递增（将跟踪它们的使用次数）。<br>

如需使用 `CSS` 计数器，我们将使用以下属性：<br>

`counter-reset` - 创建或重置计数器<br>
`counter-increment` - 递增计数器值<br>
`content` - 插入生成的内容<br>
`counter()` 或 `counters()` 函数 - 将计数器的值添加到元素<br>
如需使用 `CSS` 计数器，必须首先使用 `counter-reset` 创建它。<br>

下面的例子为 `ol` 选择器创建一个计数器，然后为每个 `<li>` 元素增加计数器值，并在每个 `<li>` 元素的开头添加 "Section `<value of the counter>`:"

::: demo
counter/basic
:::

## `counters()` 函数
计数器对于创建概述列表也很有用，因为在子元素中会自动创建一个计数器的新实例。下面的例子使用 `counters()` 函数在不同级别的嵌套计数器之间插入一个字符串：
::: demo
counter/nested
:::
