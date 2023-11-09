import { mdPlugin } from './config/plugins.js'

module.exports = {
  title: '技术视野',
  description: 'Just playing around.',
  lastUpdated: true,
  head: [
    ['link',{ rel: 'icon', type: "image/svg+xml", href: '/logo.svg' }]
  ],
  markdown: {
    config: (md) => mdPlugin(md)
  },
  themeConfig: {
    outline: 'deep',
    outlineTitle: '本节目录',
    lastUpdatedText: '最后更新时间',
    nav: [
      { text: "首页", link: "/" },
      { text: '视野', link: '/vision/document/quickUse' },
      { text: '笔记', link: '/guide/textTransform' },
    ],
    sidebar: {
      "/vision/": [
        {
          text: '文档构建',
          items: [
            { text: 'vitepress', link: '/vision/document/quickUse' },
            { text: '配置', link: '/vision/document/vitepressConfig' },
            { text: '添加文档搜索功能', link: '/vision/document/search' },
            { text: '路由', link: '/vision/document/routing' },
            { text: '静态资源处理', link: '/vision/document/assetsHandle' },
            { text: 'Markdown扩展', link: '/vision/document/mdExtend' },
            { text: '部署', link: '/vision/document/deploy' }
          ]
        },
        {
          text: '命令行工具',
          items: [
            { text: '创建你的第一个cli', link: '/vision/cli/command' },
            { text: 'Commander', link: '/vision/cli/commander' },
            { text: 'inquirer', link: '/vision/cli/inquirer' },
            { text: '美化控制台输出', link: '/vision/cli/beautify' }
          ]
        },
        {
          text: 'ElementUI',
          items: [
            { text: '全局引入与按需引入', link: '/vision/element/introduce' },
            { text: '多层级组件间的通讯', link: '/vision/element/communication' },
            { text: '指令-clickoutside', link: '/vision/element/clickoutside' },
            { text: '指令-repeatClick', link: '/vision/element/repeatClick' },
            { text: '隐藏组件-ElScrollbar', link: '/vision/element/scrollbar' },
            { text: '组件-loading', link: '/vision/element/loading' }
          ]
        },
        {
          text: 'webpack',
          items: [
            { text: 'webpack是什么', link: '/vision/webpack/start' },
            { text: '配置文件', link: '/vision/webpack/config' },
            { text: 'webpack打包后的输入内容含义解析', link: '/vision/webpack/inputContent' },
            { text: 'loader是什么', link: '/vision/webpack/loader' }
          ]
        }
      ],
      "/guide/": [
        {
          text: 'CSS',
          items: [
            { text: '文本转换', link: '/guide/textTransform' },
            { text: '文字装饰', link: '/guide/decoration' },
            { text: '文字间距', link: '/guide/textSpacing' },
            { text: '文本阴影', link: '/guide/textShadow' },
            { text: '列表', link: '/guide/list' },
            { text: '图像精灵', link: '/guide/imageSprite' },
            { text: '属性选择器', link: '/guide/selector' },
            { text: '计数器', link: '/guide/counter' },
            { text: '变量', link: '/guide/variable' },
            { text: 'Box Sizing', link: '/guide/boxSizing' },
            { text: 'Flexbox', link: '/guide/flexbox' },
            { text: '媒体查询', link: '/guide/media' }
          ]
        }
      ]
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/lzy20180910/lzy20180910.github.io'
      }
    ],
    logo: '/logo.svg',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present LZY'
    },
    editLink: {
      pattern: ({ relativePath }) => {
        return `https://github.com/lzy20180910/lzy20180910.github.io/tree/master/docs/${relativePath}`
      },
      text: '在GitHub上编辑这个页面'
    },
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
}