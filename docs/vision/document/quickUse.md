# 前言
本文档使用<a href="https://vitepress.dev/" target="_blank">`vitepress`</a>构建，本章讲解如何使用`vitepress`构建一个属于你自己的博客！并且讲解如何使用`github pages`和`github actions`功能来持续集成和自动部署你的博客
## Vitepress介绍
`VitePress`是一个静态网站生成器，基于`Vite`构建，非常适合用来构建博客和文档，Vue3跟Element-Plus的官方文档都是用它来构建的。

## 快速上手
如何从头开始搭建一个简单的 `VitePress` 文档站点。如果你已经有了一个存在的项目并且向在项目中维护文档，你可以从步骤 3 开始<br>

- 步骤1：创建项目文件夹
```sh
$ mkdir vitepress-starter && cd vitepress-starter
```

- 步骤2：初始化项目
```sh
$ yarn init
```

- 步骤3：本地安装 `VitePress`
```sh
$ yarn add --dev vitepress
```

- 步骤4：创建你第一篇文档
```sh
$ mkdir docs && echo '# Hello VitePress' > docs/index.md
```

- 步骤5：在 `package.json` 添加一些 `script`
```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}
```

- 步骤6：在本地服务器上启动文档站点
```sh
$ yarn docs:dev
```

`VitePress` 会在 `http://localhost:3000`启动一个热重载的开发服务器。<br>
现在，你应该有了一个基本的单功能强大的 `VitePress` 文档站点了。
