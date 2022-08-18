import DefaultTheme from 'vitepress/theme'
import Demo from '@/Demo.vue'
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '../../../style/index.css'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Demo', Demo)
    app.use(hljsVuePlugin)
    app.use(ElementPlus)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}