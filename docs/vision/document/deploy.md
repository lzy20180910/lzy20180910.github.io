# 部署
当你完成了自己的`vitepress`项目后，可以利用`GitHub Pages`来部署自己的项目，利用`Github Actions`来做持续集成

## 配置
如果你想把自己的`vitepress`项目部署到`GitHub Pages`上，需要在`docs/.vitepress/config.js`中设置正确的 `base`。
如果你想部署到 `https://<USERNAME or GROUP>.github.io/`, 你可以省略这一步，因为 `base` 默认为 `'/'`。

如果你想部署到 `https://<USERNAME or GROUP>.github.io/<REPO>/`, 比如你的仓库是 `https://github.com/<USERNAME>/<REPO>`, 那么需要设置`base` 为 `'/<REPO>/'`。

## GitHub Pages
在GitHub上，仓库命名如果为`"用户名.github.io"`，那么该仓库就默认为一个`GitHub Pages`应用，默认就可以直接通过`"用户名.github.io"`去访问该仓库下`master`的`index.html`文件。我们可以创建一个`gh-pages`分支专门用来存放打包好的项目资源，并配置访问`"用户名.github.io"`时是访问该分支上的内容，配置位置如下图：
<Gimage src="/vision/document/deploy/img1.png"/>
一个仓库命名非`"用户名.github.io"`格式的`github`仓库默认不是一个`GitHub Pages`应用，如果要设置成`GitHub Pages`应用，方法跟上图一样，然后假设你的仓库名为`test`，那么访问地址为`"用户名.github.io/test"`

## Github Actions
如果我们每次改完东西都要重新打包项目，再把打包后的产物提交到`gh-pages`分支上，这无疑是一件非常费时效率低下的事情。如果可以每次修改完代码push到master分支后，github就能帮我们自动打包并且部署到`gh-pages`分支上，这样的持续集成是不是非常的赞呢？`Github Actions`就是用来做这件事的！

- 1.首先呢我们先新建一个空分支，命名为gh-pages，执行git checkout --orphan gh-pages来生成，--orphan参数的作用是该分支会包含父分支的所有文件，但该分支不会指向任何以前的提交，就是它没有历史。然后执行git rm -rf .（注意这边有个点“.”）来删除所有文件(想要空分支，所以需要把当前内容全部删除)，然后你可以随便建个文件，比如README.md文件，里面随便写点啥，然后git add .跟git commit -m '一些描述'，然后git push --set-upstream origin gh-pages推送到远程分支，这样子你这个分支就会在远程仓库里

- 2.弄这个分支是要干什么呢？因为很多github pages应用都会特意弄这么一个分支，然后在点开你对应的仓库，在Settings->Pages->Branch下，下拉选择为gh-pages分支然后save保存，这样子呢当你访问“用户名.github.io”的时候就会去访问你这个gh-pages分支下的index.html，你master分支是不是就可以用来管理你的项目？这样是不是就分开了
<Gimage src="/vision/document/deploy/img2.png"/>

- 3.接着我们还需要一个去生成一个Personal access tokens秘钥，Settings->Developer settings->Personal access tokens->Generate new token，生成tokens要保留起来，下次进来这个tokens就看不到了
<Gimage src="/vision/document/deploy/img3.png"/>
<Gimage src="/vision/document/deploy/img4.png"/>
<Gimage src="/vision/document/deploy/img5.png"/>
<Gimage src="/vision/document/deploy/img6.png"/>
<Gimage src="/vision/document/deploy/img7.png"/>

- 4.然后拿到tokens后，就点开仓库，在Settings->Secrets->Actions->New repository secret添加一个变量，这个变量等下会用到
<Gimage src="/vision/document/deploy/img8.png"/>
<Gimage src="/vision/document/deploy/img9.png"/>

- 5.接下来就可以设置github actions了，先在仓库下点开Actions，然后点击New workflow，再点击Suggested for this repository
下的Configure，然后把里面的内容替换成下面的内容：
```yaml
name: Node.js CI # action名称

on:
  push:
    branches: [ "master" ] # 监听master分支的push事件，每次push都会执行下面的命令

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js 16
      uses: actions/setup-node@v3 # 安装node
      with:
        node-version: 16.x # node版本
        cache: 'yarn'
    - run: yarn install # 安装依赖
    - run: yarn docs:build # 构建命令
    
    # 部署
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v2.5.0
      env:
          # 前面生成的token秘钥
          PERSONAL_TOKEN: ${{ secrets.DEPLOY_KEY }}
          # 打包后提交到哪个分支
          PUBLISH_BRANCH: gh-pages
          # 生成文件的目录，打包后会把代码部署到上面指定的gh-pages分支中去
          PUBLISH_DIR: ./docs/.vitepress/dist
```