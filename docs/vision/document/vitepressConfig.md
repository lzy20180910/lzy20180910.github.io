# 配置

必要的项目结构

```sh
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js // vitepress的配置文件
│  └─ index.md // 默认访问首页文件，后面章节会详细介绍如何配置首页
└─ package.json
```

## 本项目config.js配置文件详解
```js
// 自定义markdown语法，后面另起章节详解
import { mdPlugin } from './config/plugins.js'

module.exports = {
  // 网站标题
  title: '技术视野',
  // 对应head中meta标签description
  description: 'Just playing around.',
  // 开启上次更新文档的时间显示
  lastUpdated: true,
  // 配置head标签里的内容
  head: [
    // 配置网站logo
    ['link',{ rel: 'icon', type: "image/svg+xml", href: '/logo.svg' }]
  ],
  // markdown选项，config选项可以根据自己的需求用来扩展markdown语法
  markdown: {
    config: (md) => mdPlugin(md)
  },
  themeConfig: {
    // 设置为deep时，页面右边快速导航将展示除h1之外的标题
    outline: 'deep',
    // 页面右边快速导航自定义文字标题
    outlineTitle: '本节目录',
    lastUpdatedText: '最后更新时间',
    // 配置导航栏
    nav: [
      { text: "首页", link: "/" },
      { text: '视野', link: '/vision/document/preface' },
      { text: '笔记', link: '/guide/textTransform' },
    ],
    // 配置侧边栏，跟导航栏相呼应
    sidebar: {
      "/vision/": [
        {
          text: '文档构建',
          items: [
            { text: '前言', link: '/vision/document/preface' }
          ]
        }
      ],
      "/guide/": [
        {
          text: 'CSS',
          items: [
            { text: '文本转换', link: '/guide/textTransform' }
          ]
        }
      ]
    },
    // 配置其它的链接，比如下面会在顶部导航右边配置github的图标及链接
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/lzy20180910/lzy20180910.github.io'
      }
    ],
    // 配置左上角标题图标
    logo: '/logo.svg',
    // 页脚配置。您可以在页脚上添加消息或版权文本
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present LZY'
    },
    // 配置点击跳转到对应的github地址编辑页
    editLink: {
      pattern: ({ relativePath }) => {
        return `https://github.com/lzy20180910/lzy20180910.github.io/tree/master/docs/${relativePath}`
      },
      text: '在GitHub上编辑这个页面'
    },
    // VitePress内置了对Carbon Ads（广告）的本地支持。通过在配置中定义碳广告凭据，VitePress将在页面上显示广告。
    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    },
    // 自定义上一页、下一页按钮的文本
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
}
```


## 本项目index.md配置文件详解
访问网站时默认会访问项目根目录下`docs`文件夹内的`index.md`，`vitepress`已经提供了默认页面配置，只需要根据自己的需求设置即可，下面是配置详解

```yaml
---
layout: home // 表示这是一个home的布局样式

hero:
  name: 前端
  text: 技术视野
  tagline: I am not afraid of tomorrow for I have seen yesterday and love today. 
  image: // 右边部分展示的图标
    src: /logo.svg
    alt: VitePress
  actions: // 配置按钮
    - theme: alt
      text: 开始
      link: /guide/textTransform

features: // 底部的一些自定义介绍内容展示
  - icon: ⚡️
    title: Bruce Lee
    details: 如果你热爱生活，就不要浪费时间，因为生活是由时间组成的。
  - icon: 🖖
    title: Jason Statham
    details: 你每天起床前有两个选择，要么继续趴下做你没有做完的梦，要么拉开被子完成你没有完成的梦想。
  - icon: 🛠️
    title: Good Will Hunting
    details: 你很强壮，谈到战争，你会说出莎士比亚的话“共赴战场，亲爱的朋友”，但你从未参与过战争，从未把好友的头抱在膝盖上，看着他吐出最后一口气，用求助的目光望向你。
---
```

除了vitepress提供的配置可以快速构建首页内容外，仍然可以添加自己的内容，比如在以上配置底部加入一下代码，就会展示VpHome组件中的内容：
```html
<vp-home />

<script setup>
  import VpHome from '@/components/VpHome.vue'
</script>
```

## 完全自定制首页
可以在`docs/.vitepress/theme/index.js`文件里的`Layout`选项中配置自己的首页组件来完全自定制主页，这样就不会访问index.md文件
```js
import Layout from './Layout.vue'

export default {
  Layout // 这个配置可以完全自定制主题，访问网站的时候这个组件的内容为首页
}
```