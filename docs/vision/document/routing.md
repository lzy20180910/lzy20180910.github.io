# 路由
本节讲解vitepress中的路由跳转

## 页面之间如何跳转
在页面之间跳转时，可以使用绝对路径和相对路径。请注意，虽然.md和.html扩展名都可以工作，但最好的做法是省略文件扩展名，以便VitePress可以根据您的配置生成最终的url。
```md
[Getting Started](./preface) 
[Getting Started](../document/quickUse)
```
语法解释：`[]`内表示文本，`()`内表示要跳转的页面链接

## 路由重写
您可以自定义源目录结构和生成的页面之间的映射。当你有一个复杂的项目结构时，它很有用。例如，假设你有一个带有多个包的`monorepo`，并且希望像这样将文档与源文件一起放置:

```yaml
.
├─ packages
│  ├─ pkg-a
│  │  └─ src
│  │      ├─ pkg-a-code.ts
│  │      └─ pkg-a-docs.md
│  └─ pkg-b
│     └─ src
│         ├─ pkg-b-code.ts
│         └─ pkg-b-docs.md
```
你想要这样生成`VitePress`页面:
```yaml
packages/pkg-a/src/pkg-a-docs.md  -->  /pkg-a/index.html
packages/pkg-b/src/pkg-b-docs.md  -->  /pkg-b/index.html
```
你可以通过在`docs/.vitepress/config.js`中重写配置选项来实现:
```js
// .vitepress/config.js
export default {
  rewrites: {
    'packages/pkg-a/src/pkg-a-docs.md': 'pkg-a/index.md',
    'packages/pkg-b/src/pkg-b-docs.md': 'pkg-b/index.md'
  }
}
```

重写选项还支持动态路由参数。在上面的例子中，如果您有很多包，那么列出所有的路径就太冗长了。假设它们都有相同的文件结构，你可以这样简化配置:
```js
export default {
  rewrites: {
    'packages/:pkg/src/(.*)': ':pkg/index.md'
  }
}
```