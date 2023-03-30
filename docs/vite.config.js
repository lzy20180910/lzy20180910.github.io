import { MarkdownTransform } from './.vitepress/config/markdown-transform'
import path from 'path'

export default {
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '../components') },
      { find: '@asset', replacement: path.resolve(__dirname, './.vitepress/public') }
    ]
  },
  plugins: [
    MarkdownTransform()
  ],
  css: {
    preprocessorOptions: {
        scss: {
            charset: false
        }
    },
    postcss: {
        plugins: [
            {
                postcssPlugin: 'internal:charset-removal',
                AtRule: {
                    charset: (atRule) => {
                        if (atRule.name === 'charset') {
                            atRule.remove();
                        }
                    }
                }
            }
        ],
    },
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
          }
          // if (id.includes('node_modules\\element-plus')) {
          //   return 'element-plus';
          // }
        }
      }
    }
  },
  ssr:{noExternal:['@highlightjs/vue-plugin']}
}