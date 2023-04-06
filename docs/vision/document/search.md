# 添加文档搜索功能
`vitepress`有提供配置来使用`algolia`搜索，但是`algolia`需要申请比较麻烦，本文档使用第三方库`vitepress-plugin-search`实现文档搜索功能

## 安装
```shell
npm i vitepress-plugin-search markdown-it flexsearch -D
```


## 添加和配置插件
在`docs/vite.config.js`配置文件中添加如下配置即可。
```js
import { SearchPlugin } from "vitepress-plugin-search";
import flexSearchIndexOptions from "flexsearch";

var options = {
  ...flexSearchIndexOptions,
  previewLength: 100, //搜索结果预览长度
  buttonLabel: "搜索",
  placeholder: "情输入关键词",
  // 加上这两个配置才能支持中文搜索
  encode: false,
  tokenize: "full"
}

export default {
  plugins: [SearchPlugin(options)]
}
```

## 覆盖搜索样式
需要在`.vitepress/theme/index.js`下引入样式重新覆盖样式，本项目全局样式在`docs/style/index.css`。
```css
.DocSearch-Button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: transparent;
  transition: border-color 0.25s;
}
@media (min-width: 768px) {
  .DocSearch-Button {
    justify-content: flex-start;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0 10px 0 12px;
    width: 100%;
    height: 40px;
    background-color: var(--vp-c-bg-alt);
  }
}
@media (max-width: 768px) {
  .DocSearch-Button-Keys {
    display: none;
  }
  .VPNavBarHamburger {
    height: 32px !important;
    width: 32px !important;
    border-radius: 4px;
  }
}
.DocSearch-Button:hover {
  background-color: var(--vp-c-bg-alt);
}
```