# 创建你的第一个命令行工具
像`vue-cli`脚手架只需要在控制台输一行命令就可以帮我们快速生成一个项目，掌握如何开发命令行工具可以帮助我们高效的开发，本节通过一个简单的demo教你如何用`nodejs`写一个命令行工具

## 创建命令

第一步就是先创建一个可以在命令行工具里全局执行的命令，步骤如下：
- 1.创建一个文件夹，然后`npm init -y`，生成`package.json`文件
- 2.在新建的文件夹下再创建一个`index.js`文件

```js
// index.js
#!/usr/bin/env node
console.log('hello world')
```

添加`#!/usr/bin/env node`，这是告诉系统，下面这个脚本，使用`nodejs`来执行，这行也是必须加的
- 3.添加`package.json`的`bin`字段。

```json
{
     "bin":{
         "hello-cli":"index.js"  
     }
}
```

`bin`字段里面写上这个命令行的名字，也就是`hello-cli`，它告诉`npm`，里面的`index.js`脚本可以通过命令行的方式执行，以`hello-cli`的命令调用。当然命令行的名字你想写什么都是你的自由。<br>
在当前`package.json`目录下，打开命令行工具，执行`npm link`，`npm`检测到`package.json`里面存在一个`bin`字段，会将当前的代码在`npm`全局`node_modules`目录下留个快捷方式，同时在全局`npm`包目录下生成对应的可执行文件：
<Gimage src="/vision/cli/command/img1.png"/>

当我们在系统命令行直接执行`hello-cli`的时候，实际上就是执行`index.js`脚本。<br>
因为安装`node`的时候，`npm`将这个目录配置为系统变量环境了，当你执行命令的时候，系统会先找系统命令和系统变量，然后到变量环境里面去查找这个命令名，然后找到这个目录后，发现匹配上了该命令名的可执行文件，接着就直接执行它。`vue-cli`也好，`webpack-cli`也好，都是这样执行的。<br>
然后在控制台上执行`hello-cli`：
<Gimage src="/vision/cli/command/img2.png"/>

这是通过`npm link`创建全局命令的方式，这样的方式适合在开发的时候测试用，这样的方式就不需要每次修改代码后都要重新发布到`npm`再重新安装。<br>
等到脚手架构建完毕后发布到`npm`上后，就可以通过`npm install xxx -g`的方式全局安装，跟`npm link`的区别是这会不只是在`npm`全局`node_modules`目录生成快捷方式，而是会把整个项目安装在`node_modules`下，如果是通过`npm install xxx --save`局部安装的话，只能通过`npm run script`的方式调用命令。


## 获取命令参数
到了这里已经创建出了一个我们自定义的可以在系统命令行执行的命令，那么我们知道一个命令往往后面都会带上一些参数，比如`vue-cli`创建`vue`项目模板的指令`vue create xxx`，那么我们的命令执行脚本要如何获取后面的参数呢？<br>
通过`node`中的`process.argv`即可获得，我们输入`hello-cli create template`打印一下看看：
<Gimage src="/vision/cli/command/img3.png"/>

会打印出一个数组，前面两个是固定的，一个是`node`所在的执行路径，一个是当前脚本的路径，多出来的就是命令后面跟着的额外的参数，拿到参数之后我们就可以做很多事情了，比如我们改下`index.js`中的内容：
<Gimage src="/vision/cli/command/img4.png"/>

然后输入`hello-cli Michael`，控制台就会打印出：
<Gimage src="/vision/cli/command/img5.png"/>
