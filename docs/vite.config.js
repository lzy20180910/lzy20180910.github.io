import { MarkdownTransform } from './.vitepress/config/markdown-transform'
import path from 'path'
import { SearchPlugin } from "vitepress-plugin-search";
import flexSearchIndexOptions from "flexsearch";
//default options
var options = {
  ...flexSearchIndexOptions,
  previewLength: 100, //搜索结果预览长度
  buttonLabel: "搜索",
  placeholder: "情输入关键词",
  // 加上这两个配置才能支持中文搜索
  encode: false,
  tokenize: "full"
};


export default {

  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './') }
    ]
  },
  plugins: [
    MarkdownTransform(),
    SearchPlugin(options)
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