# 隐藏组件el-scrollbar
`el-scrollbar`是`ElementUi`内部使用的隐藏组件，没有在官方文档中列出，这个组件实现了自定义的滚动条。
`ElementUi`的组件中会产生滚动条的场景都是用自定义的`el-scrollbar`组件实现的，浏览器自带的滚动条会比较丑，有时需要自定义滚动条样式，可以用`css`自带的属性实现，但是兼容性不好，而`el-scrollbar`组件实现的自定义滚动条兼容性会更好，因为它的原理是通过`css`先隐藏了原生的滚动条，然后再插入自定义的滚动条。

## 用法示例：
```vue
<template>
  <!-- 注意点：在使用时要设置外层容器高度。并且要设置el-scrollbar 的高度为100% -->
  <div style="width: 150px;height:300px;">
    <el-scrollbar style="height:100%;">
      <!--下面这一块放想要滚动的内容-->
      <div>
        <h2>1</h2>
        <h2>2</h2>
        <h2>3</h2>
        <h2>4</h2>
        <h2>5</h2>
        <h2>6</h2>
        <h2>7</h2>
        <h2>8</h2>
      </div>
    </el-scrollbar>
  </div>
</template>
<style scoped>
/deep/ .el-scrollbar .el-scrollbar__wrap {overflow-x: hidden;}
</style>
```