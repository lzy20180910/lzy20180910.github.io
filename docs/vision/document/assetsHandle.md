# 静态资源处理
所有的Markdown文件都通过Vite处理编译成Vue组件。你可以并且应当使用相对URL引用静态资源。
```md
![An image](./image.png)
```
你可以在你的`Markdown`文件、`*.vue`组件、样式和纯`.css`文件使用绝对公共路径(基于项目根目录)或相对路径(基于你的文件系统)。<br>
所有被引用的静态资源，包括使用绝对路径的资源，在生产构建中会被复制到`dist`文件夹中，并重命名为`hash`文件名的文件。没有被引用的静态资源会被被复制。类似于`vue-cli`，小于`4kb`的图片资源会转化为内联的`base64`字符。<br>
所有静态路径引用，包括绝对路径，应当基于你的工作目录结构。

## 公共文件
有时候，你可能需要提供在你的`Markdown`或主题文件都没有直接引用的静态资源(如favicons和PWA 图标)。在项目根目录下的`public`目录可以用作转换舱口提供在源代码中没有引用的静态资源(如robots.txt)或必须保留完全相同文件名(没有`hash`)的文件。

存放在`public`下的静态资源将原样复制到`dist`目录的根目录。<br>

注意，你应该使用根绝对路径引用放置在`public`文件夹中的文件。例如，文件`public/icon.png`在源代码中应该始终作为`/icon.png`被引用。<br>

## 基础 URL
如果你的站点部署在非根`URL`，你需要在 `docs/.vitepress/config.js`中设置`base`选项。例如，如果你计划部署你的站点到`https://foo.github.io/bar/`，`base`选项就应该设置为`'/bar/'`(始终以/开始和结尾)。<br>

设置基础`URL`后，为了引用`public`中的图像，你就需要使用类似`/bar/image.png`的`URL`。 但是，当你觉得改变`base`值时，这样会很脆弱。 为此，`VitePress`提供了一个内置的助手`$withBase`(注入在`Vue`原型上)，用于生成正确的路径：
```html
<img :src="$withBase('/foo.png')" alt="foo" />
```
注意，你不仅可以在主题组件中使用以上语法，还可以在Markdown文件中使用。

