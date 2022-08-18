# 属性选择器
可以为带有特定属性的 HTML 元素设置样式

## `[attribute]` 选择器
`[attribute]` 选择器用于选取带有指定属性的元素。<br>
下例选择所有带有 `target` 属性的 `<a>` 元素；<br>

```css
a[target] {
  background-color: yellow;
}
```

## `[attribute="value"]` 选择器
`[attribute="value"]` 选择器用于选取带有指定属性和值的元素。<br>
下例选取所有带有 `target="_blank"` 属性的 `<a>` 元素：<br>
```css
a[target="_blank"] { 
  background-color: yellow;
}
```

## `[attribute~="value"]` 选择器
`[attribute~="value"]` 选择器选取属性值包含指定词的元素。<br>
下例选取 `title` 属性包含 `"flower"` 单词的所有元素：<br>
```css
[title~="flower"] {
  border: 5px solid yellow;
}
```
上面的例子会匹配以下属性的元素：title="flower"、title="summer flower" 以及 title="flower new"，但不匹配：title="my-flower" 或 title="flowers"。

## `[attribute|="value"]` 选择器
`[attribute|="value"]` 选择器用于选取指定属性以指定值开头的元素。<br>
下例选取 `class` 属性以 `"top"` 开头的所有元素：<br>
注释：值必须是完整或单独的单词，比如 class="top" 或者后跟连字符的，比如 class="top-text"。<br>
```css
[class|="top"] {
  background: yellow;
}
```

## `[attribute^="value"]` 选择器
`[attribute^="value"]` 选择器用于选取指定属性以指定值开头的元素。<br>
下例选取 `class` 属性以 `"top"` 开头的所有元素：<br>
跟上面的选择器是一样的，区别是上面的值必须是完整或单独的单词，这个的值不必是完整单词！<br>
```css
[class^="top"] {
  background: yellow;
}
```

## `[attribute$="value"]` 选择器
`[attribute$="value"]` 选择器用于选取指定属性以指定值结尾的元素。<br>
下例选取 `class` 属性以 `"test"` 结尾的所有元素：<br>
提示：值不必是完整单词！<br>
```css
[class$="test"] {
  background: yellow;
}
```

## `[attribute*="value"]` 选择器
`[attribute*="value"]` 选择器选取属性值包含指定词的元素。<br>
下例选取 `class` 属性包含 `"te"` 的所有元素：<br>
提示：值不必是完整单词！<br>
```css
[class*="te"] {
  background: yellow;
}
```
