import DefaultTheme from 'vitepress/theme'
import Demo from '@/components/Demo.vue'
import Gimage from '@/components/image.vue'
// import 'highlight.js/styles/atom-one-dark.css'
// import 'highlight.js/lib/common'
// import hljsVuePlugin from '@highlightjs/vue-plugin'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/style/index.css'
// import Layout from './Layout.vue'

export default {
  ...DefaultTheme,
  // Layout, // 这个配置可以完全自定制主题，访问网站的时候这个组件的内容为首页
  enhanceApp({ app }) {
    // app.use(hljsVuePlugin)
    app.use(ElementPlus)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    app.component('Demo', Demo)
    app.component('Gimage', Gimage)
  }
}