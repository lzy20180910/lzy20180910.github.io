# markdown扩展
`vitepress`提供了多种`markdown`扩展支持，详情可以查看官方文档，这节讲解如何自定义扩展`markdown`语法

## 配置
`VitePress` 使用 `markdown-it` 作为`Markdown`的渲染器。许多扩展是通过自定义插件实现。你可以通过 `.vitepress/config.js`中的`markdown`选项进一步定制`markdown-it`:
```js
module.exports = {
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

## 自定义:::demo:::容器
本项目`笔记->CSS`中的demo演示就是利用自定义markdown语法实现，
实现思路：
- 1.被`:::demo:::`包裹的内容表示为demo所在的文件路径
```md
::: demo
boxSizing/basic
:::
```

如上面表示该demo的路径为`examples/boxSizing/basic`

- 2.通过第三方库`markdown-it-container`自定义容器，就可以拿到被`:::demo:::`包裹的内容，也就是demo文件路径，并且将其解析成`Demo`组件
```js
import path from 'path'
import fs from 'fs'
// 第三方的库，可以方便我们自定义容器
const mdContainer = require('markdown-it-container');

export const mdPlugin = md => {
  // 如何去解析:::demo:::包裹的代码
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      // tokens就是插件解析后的ast树
      if (tokens[idx].nesting === 1) { // 表示如果是开始标签
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        if (sourceFileToken.type === 'inline') {
          // 通过被包裹的路径拿到对应的demo源码
          source = fs.readFileSync(
            path.resolve(__dirname, `../../examples/${sourceFile}.vue`),
            'utf-8'
          )
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        // Demo是一个全局的组件，专门用来展示demo
        // demos表示该文件夹下所有的demo资源，path为demo路径，source为demo的源码，用来展示
        return `<Demo
          :demos="demos"
          path="${sourceFile}"
          source="${encodeURIComponent(
            source
          )}"
        >`;
      }
      return '</Demo>';
    }
  });
};
```
```md
::: demo
boxSizing/basic
:::
最终会被解析成
<Demo
  :demos="demos"
  path="boxSizing/basic"
  source="经过encodeURIComponent处理的源码"
>boxSizing/basic</Demo>
```

- 3.最后通过`vite`的配置，再自定义一个插件，该插件用来在含有`:::demo:::`的md文件底部拼凑上一段vue的代码，用`vite`内置的`api：import.meta.globEager`导出所有匹配的demo（注意demo都是放在`docs/examples`文件夹下，`docs/guide`下的文件名要跟`docs/examples`下的一致），`Demo`组件内部再根据文件路径去显示不同的demo
```js
import fs from 'fs'
import path from 'path'

export function MarkdownTransform() {
  return {
    name: 'demo-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md')) return
      // 拿到文件名
      const componentId = path.basename(id, '.md')

      if (code.indexOf('::: demo') != -1) {
        return `${code}\n<script>
          export default {
            setup() {
              const demos = import.meta.globEager('../examples/${componentId}/*.vue')
              return {
                demos
              }
            }
          }
        </script>
        `
      }
      
    }
  }
}
```

- 4.全局组件`Demo`用来展示demo
```vue
<template>
  <div>
    <div class="example">
      <component :is="formatPathDemos[path]"></component>
    </div>

    <ElCollapseTransition>
      <div class="source l_margin" v-show="show">
        <highlightjs autodetect :code="fileSource" />
      </div>
    </ElCollapseTransition>

    <div v-show="!show" class="source toggle l_margin" @click="toggleShow">
      <el-icon><CaretBottom /></el-icon>查看源码
    </div>
    <div v-show="show" class="source toggle l_sticky" @click="toggleShow">
      <el-icon><CaretTop /></el-icon>隐藏源码
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const show = ref(false)
const props = defineProps({
  path: String,
  demos: Object,
  source: String
})
const formatPathDemos = computed(() => {
  const demos = {}

  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../examples/', '').replace('.vue', '')] =
      props.demos[key].default
  })

  return demos
})

function toggleShow() {
  show.value = !show.value
}

const fileSource = computed(() => decodeURIComponent(props.source))

</script>
```


