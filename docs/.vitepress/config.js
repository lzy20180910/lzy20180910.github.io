import { mdPlugin } from './config/plugins.js'

module.exports = {
  title: '技术视野',
  description: 'Just playing around.',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.svg'
      }
    ]
  ],
  markdown: {
    config: (md) => mdPlugin(md)
  },
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    nav: [
      { text: '指南', link: '/guide/textTransform' },
    ],
    sidebar: [
      {
        text: 'CSS基础',
        items: [
          // { text: '文字装饰', link: '/guide/decoration' },
          { text: '文本转换', link: '/guide/textTransform' },
          { text: '文字间距', link: '/guide/textSpacing' },
          { text: '文本阴影', link: '/guide/textShadow' },
          { text: '列表', link: '/guide/list' }
        ]
      },
      {
        text: 'CSS中级',
        items: [
          { text: '图像精灵', link: '/guide/imageSprite' },
          { text: '属性选择器', link: '/guide/selector' }
          // { text: '计数器', link: '/guide/counter' },
        ]
      },
      {
        text: 'CSS高级',
        items: [
          { text: '变量', link: '/guide/variable' },
          { text: 'Box Sizing', link: '/guide/boxSizing' },
          { text: 'Flexbox', link: '/guide/flexbox' },
          { text: '媒体查询', link: '/guide/media' }
        ]
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/lzy20180910/lzy20180910.github.io'
      }
    ],
    logo: '/logo.svg'
  }
}