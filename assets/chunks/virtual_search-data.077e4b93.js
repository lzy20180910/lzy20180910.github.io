box-sizing 的常用属性值：&lt;br&gt;
content-box：padding ...`,l:"guide/boxSizing.html",a:"box-sizing"},"0.1":{t:"假如不指定-box-sizing-属性",p:`默认情况下，元素的宽度和高度是这样计算的：&lt;br&gt;
width + padding + border = 元素的实际宽度&lt;br&gt;
height + padding + bord ...`,l:"guide/boxSizing.html#假如不指定-box-sizing-属性",a:"假如不指定-box-sizing-属性"},"0.2":{t:"如果使用-box-sizing-属性",p:`box-sizing 属性允许我们在元素的总宽度和高度中包括内边距和边框。&lt;br&gt;
如果在元素上设置了 box-sizing: border-box;，则宽度和高度会包括内边距和边框：
: ...`,l:"guide/boxSizing.html#如果使用-box-sizing-属性",a:"如果使用-box-sizing-属性"},"1.0":{t:"计数器",p:`CSS 计数器是由 CSS 保持的“变量”，其值可以通过 CSS 规则递增（以跟踪其使用次数）。&lt;br&gt;
计数器使您可以根据内容在文档中的位置来调整其外观。
`,l:"guide/counter.html",a:"计数器"},"1.1":{t:"带计数器的自动编号",p:`CSS 计数器就像“变量”。变量值可以通过 CSS 规则递增（将跟踪它们的使用次数）。&lt;br&gt;
如需使用 CSS 计数器，我们将使用以下属性：&lt;br&gt;
counter-rese ...`,l:"guide/counter.html#带计数器的自动编号",a:"带计数器的自动编号"},"1.2":{t:"counters-函数",p:`计数器对于创建概述列表也很有用，因为在子元素中会自动创建一个计数器的新实例。下面的例子使用 counters() 函数在不同级别的嵌套计数器之间插入一个字符串：
::: demo
counter/ne ...`,l:"guide/counter.html#counters-函数",a:"counters-函数"},"2.0":{t:"文字装饰",p:`text-decoration 属性用于设置或删除文本装饰。
`,l:"guide/decoration.html",a:"文字装饰"},"2.1":{t:"用法及demo演示",p:`text-decoration: overline;上划线&lt;br&gt;
text-decoration: line-through;中划线&lt;br&gt;
text-decoration: ...`,l:"guide/decoration.html#用法及demo演示",a:"用法及demo演示"},"3.0":{t:"flexbox",p:`弹性框布局模块，可以更轻松地设计灵活的响应式布局结构，而无需使用浮动或定位。
`,l:"guide/flexbox.html",a:"flexbox"},"3.1":{t:"父元素-容器",p:`通过将 display 属性设置为 flex，flex 容器将可伸缩：
::: demo
flexbox/basic
:::
flex 容器属性：&lt;br&gt;
flex-direction&l ...`,l:"guide/flexbox.html#父元素-容器",a:"父元素-容器"},"3.2":{t:"flex-direction-属性",p:`作用：定义容器要在哪个方向上堆叠 flex 项目。&lt;br&gt;
常用属性值及效果说明：&lt;br&gt;
column 值设置垂直堆叠 flex 项目（从上到下）：&lt;br&gt;
co ...`,l:"guide/flexbox.html#flex-direction-属性",a:"flex-direction-属性"},"3.3":{t:"flex-wrap-属性",p:`作用：规定是否应该对 flex 项目换行。&lt;br&gt;
常用属性值及效果说明：&lt;br&gt;
wrap 值规定 flex 项目将在必要时进行换行：&lt;br&gt;
nowrap 值规 ...`,l:"guide/flexbox.html#flex-wrap-属性",a:"flex-wrap-属性"},"3.4":{t:"flex-flow-属性",p:`flex-flow 属性是用于同时设置 flex-direction 和 flex-wrap 属性的简写属性。
`,l:"guide/flexbox.html#flex-flow-属性",a:"flex-flow-属性"},"3.5":{t:"justify-content-属性",p:`作用：用于对齐 flex 项目：&lt;br&gt;
常用属性值及效果说明：&lt;br&gt;
center 值将 flex 项目在容器的中心对齐：&lt;br&gt;
flex-start 值将  ...`,l:"guide/flexbox.html#justify-content-属性",a:"justify-content-属性"},"3.6":{t:"align-items-属性",p:`作用：用于垂直对齐 flex 项目。&lt;br&gt;
常用属性值及效果说明：&lt;br&gt;
center 值将 flex 项目在容器中间对齐：&lt;br&gt;
flex-start 值将 ...`,l:"guide/flexbox.html#align-items-属性",a:"align-items-属性"},"3.7":{t:"align-content-属性",p:`作用：用于对齐弹性线。&lt;br&gt;
常用属性值及效果说明：&lt;br&gt;
space-between 值显示的弹性线之间有相等的间距：&lt;br&gt;
space-around 值显 ...`,l:"guide/flexbox.html#align-content-属性",a:"align-content-属性"},"3.8":{t:"align-items-跟-align-content-的区别",p:`align-items是针对单行的，是把单行来当做一个整体来进行对齐操作的&lt;br&gt;
而align-content是针对多行的，是把多行来当做一个整体进行对齐方式操作的，只有flex容器中的 ...`,l:"guide/flexbox.html#align-items-跟-align-content-的区别",a:"align-items-跟-align-content-的区别"},"3.9":{t:"子元素-项目",p:`flex 容器的直接子元素会自动成为弹性（flex）项目。&lt;br&gt;
用于弹性项目的属性有：&lt;br&gt;
order&lt;br&gt;
flex-grow&lt;br&gt;
fl ...`,l:"guide/flexbox.html#子元素-项目",a:"子元素-项目"},"3.10":{t:"order-属性",p:`order 属性可以改变 flex 项目的顺序。order 值必须是数字，默认值是 0。
::: demo
flexbox/order
:::
`,l:"guide/flexbox.html#order-属性",a:"order-属性"},"3.11":{t:"flex-grow-属性",p:"该属性用来设置当父元素的宽度大于所有子元素的宽度的和时（即父元素会有剩余空间），子元素如何分配父元素的剩余空间。 flex-grow的默认值为0，意思是该元素不索取父元素的剩余空间，如果值大于0，表示 ...",l:"guide/flexbox.html#flex-grow-属性",a:"flex-grow-属性"},"3.12":{t:"flex-shrink-属性",p:"该属性用来设置，当父元素的宽度小于所有子元素的宽度的和时（即子元素会超出父元素），子元素如何缩小自己的宽度的。 当父元素的宽度小于所有子元素的宽度的和时，子元素的宽度会减小，flex-shrink设置 ...",l:"guide/flexbox.html#flex-shrink-属性",a:"flex-shrink-属性"},"3.13":{t:"flex-basis-属性",p:`flex-basis 属性规定 flex 项目的初始长度。设置了这个属性，width属性就会无效。&lt;br&gt;
下面的例子将第三个弹性项目的初始长度设置为 200 像素：
::: demo
f ...`,l:"guide/flexbox.html#flex-basis-属性",a:"flex-basis-属性"},"3.14":{t:"flex-属性",p:`flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。
`,l:"guide/flexbox.html#flex-属性",a:"flex-属性"},"3.15":{t:"align-self-属性",p:`align-self 属性规定弹性容器内所选项目的对齐方式。&lt;br&gt;
align-self 属性将覆盖容器的 align-items 属性所设置的默认对齐方式。
::: demo
flex ...`,l:"guide/flexbox.html#align-self-属性",a:"align-self-属性"},"4.0":{t:"图像精灵",p:`图像精灵是单个图像中包含的图像集合。&lt;br&gt;
包含许多图像的网页可能需要很长时间才能加载，同时会生成多个服务器请求。&lt;br&gt;
使用图像精灵将减少服务器请求的数量并节约带宽。&l ...`,l:"guide/imageSprite.html",a:"图像精灵"},"4.1":{t:"用法及demo演示",p:`通过设置偏移量来显示不同的图标
::: demo
imageSprite/basic
:::
`,l:"guide/imageSprite.html#用法及demo演示",a:"用法及demo演示"},"5.0":{t:"列表",p:"",l:"guide/list.html",a:"列表"},"5.1":{t:"html-列表和-css-列表属性",p:`在 HTML 中，列表主要有两种类型：&lt;br&gt;
无序列表（&lt;ul&gt;）- 列表项用的是项目符号标记&lt;br&gt;
有序列表（&lt;ol&gt;）- 列表项用的是数字或字母 ...`,l:"guide/list.html#html-列表和-css-列表属性",a:"html-列表和-css-列表属性"},"5.2":{t:"不同的列表项目标记",p:`list-style-type 属性用来指定列表项标记的类型&lt;br&gt;
list-style-type 属性的常用属性值及效果说明&lt;br&gt;
none 不使用任何项目符号&lt;b ...`,l:"guide/list.html#不同的列表项目标记",a:"不同的列表项目标记"},"5.3":{t:"图像作为列表项标记",p:`list-style-image 属性将图像指定为列表项标记：
::: demo
list/listStyleImage
:::
`,l:"guide/list.html#图像作为列表项标记",a:"图像作为列表项标记"},"6.0":{t:"媒体查询",p:`媒体查询可以用来根据不同的媒体类型定义不同的样式
`,l:"guide/media.html",a:"媒体查询"},"6.1":{t:"常用媒体类型",p:`


值
描述




all
用于所有媒体类型设备。


print
用于打印机。


screen
用于计算机屏幕、平板电脑、智能手机等等。



`,l:"guide/media.html#常用媒体类型",a:"常用媒体类型"},"6.2":{t:"媒体类型常用的引用方法",p:"1.link标签：&lt;br&gt;\n// 表示当媒体类型是`screen`并且屏幕宽度大于等于`600px`的时候，引入style.css样式\n&lt;link rel=&quot;stylesh ...",l:"guide/media.html#媒体类型常用的引用方法",a:"媒体类型常用的引用方法"},"6.3":{t:"媒体查询语法",p:`媒体查询由一种媒体类型组成，并可包含一个或多个表达式，这些表达式可以解析为 true 或 false，当媒体查询为 true 时，将应用相应的样式表或样式规则
@media not|only medi ...`,l:"guide/media.html#媒体查询语法",a:"媒体查询语法"},"6.4":{t:"demo演示",p:`下面的例子在视口宽度为 480 像素或更宽时将背景颜色更改为浅绿色（如果视口小于 480 像素，则背景颜色会是粉色）：
::: demo
media/basic
:::
`,l:"guide/media.html#demo演示",a:"demo演示"},"7.0":{t:"属性选择器",p:`可以为带有特定属性的 HTML 元素设置样式
`,l:"guide/selector.html",a:"属性选择器"},"7.1":{t:"attribute-选择器",p:`[attribute] 选择器用于选取带有指定属性的元素。&lt;br&gt;
下例选择所有带有 target 属性的 &lt;a&gt; 元素；&lt;br&gt;
a[target] {
  ba ...`,l:"guide/selector.html#attribute-选择器",a:"attribute-选择器"},"7.2":{t:"attribute-value-选择器",p:`[attribute=&quot;value&quot;] 选择器用于选取带有指定属性和值的元素。&lt;br&gt;
下例选取所有带有 target=&quot;_blank&quot; 属性的 & ...`,l:"guide/selector.html#attribute-value-选择器",a:"attribute-value-选择器"},"7.3":{t:"attribute-value-选择器",p:`[attribute~=&quot;value&quot;] 选择器选取属性值包含指定词的元素。&lt;br&gt;
下例选取 title 属性包含 &quot;flower&quot; 单词的所有元 ...`,l:"guide/selector.html#attribute-value-选择器",a:"attribute-value-选择器"},"7.4":{t:"attribute-value-选择器",p:`[attribute|=&quot;value&quot;] 选择器用于选取指定属性以指定值开头的元素。&lt;br&gt;
下例选取 class 属性以 &quot;top&quot; 开头的所有元 ...`,l:"guide/selector.html#attribute-value-选择器",a:"attribute-value-选择器"},"7.5":{t:"attribute-value-选择器",p:`[attribute^=&quot;value&quot;] 选择器用于选取指定属性以指定值开头的元素。&lt;br&gt;
下例选取 class 属性以 &quot;top&quot; 开头的所有元 ...`,l:"guide/selector.html#attribute-value-选择器",a:"attribute-value-选择器"},"7.6":{t:"attribute-value-选择器",p:`[attribute$=&quot;value&quot;] 选择器用于选取指定属性以指定值结尾的元素。&lt;br&gt;
下例选取 class 属性以 &quot;test&quot; 结尾的所有 ...`,l:"guide/selector.html#attribute-value-选择器",a:"attribute-value-选择器"},"7.7":{t:"attribute-value-选择器",p:`[attribute*=&quot;value&quot;] 选择器选取属性值包含指定词的元素。&lt;br&gt;
下例选取 class 属性包含 &quot;te&quot; 的所有元素：&lt; ...`,l:"guide/selector.html#attribute-value-选择器",a:"attribute-value-选择器"},"8.0":{t:"文本阴影",p:`text-shadow 属性为文本添加阴影。
`,l:"guide/textShadow.html",a:"文本阴影"},"8.1":{t:"基础用法",p:`最简单的用法是只指定水平阴影（2px）和垂直阴影（2px）：
::: demo
textShadow/basic
:::
`,l:"guide/textShadow.html#基础用法",a:"基础用法"},"8.2":{t:"向阴影添加颜色",p:`::: demo
textShadow/addColor
:::
`,l:"guide/textShadow.html#向阴影添加颜色",a:"向阴影添加颜色"},"8.3":{t:"向阴影添加模糊效果",p:`::: demo
textShadow/addFuzzy
:::
`,l:"guide/textShadow.html#向阴影添加模糊效果",a:"向阴影添加模糊效果"},"9.0":{t:"文字间距",p:"",l:"guide/textSpacing.html",a:"文字间距"},"9.1":{t:"文字缩进",p:`text-indent 属性用于指定文本第一行的缩进：
::: demo
textSpacing/textIndent
:::
`,l:"guide/textSpacing.html#文字缩进",a:"文字缩进"},"9.2":{t:"字母间距",p:`letter-spacing 属性用于指定文本中字符之间的间距。
下例演示如何增加或减少字符之间的间距：
::: demo
textSpacing/letterSpacing
:::
`,l:"guide/textSpacing.html#字母间距",a:"字母间距"},"10.0":{t:"文本转换",p:`text-transform 属性用于指定文本中的大写和小写字母。
它可用于将所有内容转换为大写或小写字母，或将每个单词的首字母大写：
`,l:"guide/textTransform.html",a:"文本转换"},"10.1":{t:"用法及demo演示",p:`text-transform: uppercase;将所有内容转换为大写。&lt;br&gt;
text-transform: lowercase;将所有内容转换为小写。&lt;br&gt;
text ...`,l:"guide/textTransform.html#用法及demo演示",a:"用法及demo演示"},"11.0":{t:"变量",p:`var() 函数用于插入 CSS 变量的值。&lt;br&gt;
`,l:"guide/variable.html",a:"变量"},"11.1":{t:"var-函数的语法",p:`var() 函数的语法如下：
var(name, value)




值
描述




name
变量名（以两条破折号开头）。


value
变量对应的值。



::: tip
注释：变量名称必 ...`,l:"guide/variable.html#var-函数的语法",a:"var-函数的语法"},"11.2":{t:"var-如何工作",p:`首先：CSS 变量可以有全局或局部作用域。&lt;br&gt;
全局变量可以在整个文档中进行访问/使用，而局部变量只能在声明它的选择器内部使用。&lt;br&gt;
如需创建具有全局作用域的变量，请在 ...`,l:"guide/variable.html#var-如何工作",a:"var-如何工作"},"11.3":{t:"使用-var-有如下优势",p:`1.使代码更易于阅读（更容易理解）&lt;br&gt;
2.使修改颜色值更加容易
`,l:"guide/variable.html#使用-var-有如下优势",a:"使用-var-有如下优势"},"11.4":{t:"覆盖变量",p:`有时，我们希望变量仅在页面的特定部分中进行更改&lt;br&gt;
假设我们想要按钮元素使用不同的颜色。那么，我们可以在 button 选择器内重新声明 --blue 变量。当我们在这个选择器中使用  ...`,l:"guide/variable.html#覆盖变量",a:"覆盖变量"},"11.5":{t:"使用-javascript-更改变量",p:`下面的例子通过js的方式修改--blue变量
::: demo
variable/jsSetVar
:::
`,l:"guide/variable.html#使用-javascript-更改变量",a:"使用-javascript-更改变量"},"12.0":{t:"除了可以通过自定义layout来实现自定义主题外-还可以通过注释上面的内容-保留layout-home-然后引入自定义的组件这个方式自定义首页的内容-这样能保留顶部导航-自定义导航下面的内容",p:`&lt;!-- &lt;vp-home /&gt;
--&gt;
&lt;!-- vitepress自带团队展示组件 --&gt;
&lt;!-- &lt;VPTeamMembers size=&qu ...`,l:"index.html",a:"除了可以通过自定义layout来实现自定义主题外-还可以通过注释上面的内容-保留layout-home-然后引入自定义的组件这个方式自定义首页的内容-这样能保留顶部导航-自定义导航下面的内容"},"13.0":{t:"美化控制台输出",p:`使用ora跟chalk可以帮我们美化控制台输出
const chalk = require('chalk');
const ora = require('ora');
const spinner =  ...`,l:"vision/cli/beautify.html",a:"美化控制台输出"},"13.1":{t:"chalk-内置字体颜色",p:`
black 黑色
red 红色
green 绿色
yellow 黄色
blue 蓝色
magenta 品红
cyan 青色
white 白色
redBright 亮红，感觉跟red区别不大
gree ...`,l:"vision/cli/beautify.html#chalk-内置字体颜色",a:"chalk-内置字体颜色"},"13.2":{t:"chalk-内置字体背景颜色",p:`console.log(chalk.bgBlack('---- Hello Chalk 12----'));
console.log(chalk.bgRed('---- Hello Chalk 12- ...`,l:"vision/cli/beautify.html#chalk-内置字体背景颜色",a:"chalk-内置字体背景颜色"},"13.3":{t:"chalk-使用模板字符串",p:`模块由左花括号({)、样式、一些内容和右花括号(})分隔。这里以官网的例子做示范
const miles = 18;
const calculateFeet = miles =&gt; miles * ...`,l:"vision/cli/beautify.html#chalk-使用模板字符串",a:"chalk-使用模板字符串"},"14.0":{t:"创建你的第一个命令行工具",p:`像vue-cli脚手架只需要在控制台输一行命令就可以帮我们快速生成一个项目，掌握如何开发命令行工具可以帮助我们高效的开发，本节通过一个简单的demo教你如何用nodejs写一个命令行工具
`,l:"vision/cli/command.html",a:"创建你的第一个命令行工具"},"14.1":{t:"创建命令",p:`第一步就是先创建一个可以在命令行工具里全局执行的命令，步骤如下：

1.创建一个文件夹，然后npm init -y，生成package.json文件
2.在新建的文件夹下再创建一个index.js文件 ...`,l:"vision/cli/command.html#创建命令",a:"创建命令"},"14.2":{t:"获取命令参数",p:"到了这里已经创建出了一个我们自定义的可以在系统命令行执行的命令，那么我们知道一个命令往往后面都会带上一些参数，比如vue-cli创建vue项目模板的指令vue create xxx，那么我们的命令执行 ...",l:"vision/cli/command.html#获取命令参数",a:"获取命令参数"},"15.0":{t:"commander",p:`一个命令行工具往往有复杂的业务逻辑，通常会有大量的命令行参数，Commander可以帮我们轻松的将参数解析为选项和命令参数，让我们更容易编写业务逻辑。
`,l:"vision/cli/commander.html",a:"commander"},"15.1":{t:"安装",p:`npm install commander --save

`,l:"vision/cli/commander.html#安装",a:"安装"},"15.2":{t:"使用方式",p:"",l:"vision/cli/commander.html#使用方式",a:"使用方式"},"15.3":{t:"_1-用version指定版本信息",p:`const program = require('commander');
program
  .version('1.0.0')
  .parse(process.argv)
  // 这个就是用来 ...`,l:"vision/cli/commander.html#_1-用version指定版本信息",a:"_1-用version指定版本信息"},"15.4":{t:"_2-option方法",p:`作用：option方法用来定义命令的选项，解析短横杠（-）和长横杠（--）这样的命令参数&lt;br&gt;
方法参数说明：&lt;br&gt;

自定义选项名称&lt;必须&gt;&lt;br&gt ...`,l:"vision/cli/commander.html#_2-option方法",a:"_2-option方法"},"15.5":{t:"_3-command方法",p:"作用：自定义子命令，什么意思呢，当我们创建了hello-cli这个命令后，我们可能会用这个命令去做不同的事情，比如vue create用来创建模板，vue xxx的做其它事情，那么这个时候我们定义多个 ...",l:"vision/cli/commander.html#_3-command方法",a:"_3-command方法"},"15.6":{t:"_4-查看命令的使用",p:`输入hello-cli -h或者hello-cli --help可以查看我们创建的hello-cli命令下所有的信息：
&lt;Gimage src=&quot;/vision/cli/command ...`,l:"vision/cli/commander.html#_4-查看命令的使用",a:"_4-查看命令的使用"},"16.0":{t:"inquirer的使用",p:`inquirer是一个用来实现命令行交互式界面的工具集合。它帮助我们实现与用户的交互式交流，比如给用户提一个问题，用户给我们一个答案，我们根据用户的答案来做一些事情。
`,l:"vision/cli/inquirer.html",a:"inquirer的使用"},"16.1":{t:"安装",p:`npm install inquirer --save

`,l:"vision/cli/inquirer.html#安装",a:"安装"},"16.2":{t:"使用",p:`// 引入 inquirer
const inquirer = require('inquirer');
// 启动 inquirer
inquirer
// 交互内容，参数为数组，放置向用户提问的问 ...`,l:"vision/cli/inquirer.html#使用",a:"使用"},"16.3":{t:"prompt方法",p:`接收一个参数，内容为向用户发问的问题，类型为数组，每一项即一个问题，每个问题可以配置如下属性：
const question = [{
    type: 'input', // 问题的类型，常用的类 ...`,l:"vision/cli/inquirer.html#prompt方法",a:"prompt方法"},"16.4":{t:"各种交互类型使用例子",p:`1）input：
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      ...`,l:"vision/cli/inquirer.html#各种交互类型使用例子",a:"各种交互类型使用例子"},"16.5":{t:"使用shelljs执行系统命令、文件操作",p:`#!/usr/bin/env node
const shell = require('shelljs')

// 1.判定git命令是否可用
if (!shell.which('git')) {
   ...`,l:"vision/cli/inquirer.html#使用shelljs执行系统命令、文件操作",a:"使用shelljs执行系统命令、文件操作"},"17.0":{t:"静态资源处理",p:`所有的Markdown文件都通过Vite处理编译成Vue组件。你可以并且应当使用相对URL引用静态资源。
!An image

你可以在你的Markdown文件、*.vue组件、样式和纯.css文件使 ...`,l:"vision/document/assetsHandle.html",a:"静态资源处理"},"17.1":{t:"公共文件",p:"有时候，你可能需要提供在你的Markdown或主题文件都没有直接引用的静态资源(如favicons和PWA 图标)。在项目根目录下的public目录可以用作转换舱口提供在源代码中没有引用的静态资源(如 ...",l:"vision/document/assetsHandle.html#公共文件",a:"公共文件"},"17.2":{t:"基础-url",p:"如果你的站点部署在非根URL，你需要在 docs/.vitepress/config.js中设置base选项。例如，如果你计划部署你的站点到https://foo.github.io/bar/，bas ...",l:"vision/document/assetsHandle.html#基础-url",a:"基础-url"},"18.0":{t:"部署",p:`当你完成了自己的vitepress项目后，可以利用GitHub Pages来部署自己的项目，利用Github Actions来做持续集成
`,l:"vision/document/deploy.html",a:"部署"},"18.1":{t:"配置",p:`如果你想把自己的vitepress项目部署到GitHub Pages上，需要在docs/.vitepress/config.js中设置正确的 base。
如果你想部署到 https://&lt;USE ...`,l:"vision/document/deploy.html#配置",a:"配置"},"18.2":{t:"github-pages",p:"在GitHub上，仓库命名如果为&quot;用户名.github.io&quot;，那么该仓库就默认为一个GitHub Pages应用，默认就可以直接通过&quot;用户名.github.io&quo ...",l:"vision/document/deploy.html#github-pages",a:"github-pages"},"18.3":{t:"github-actions",p:"如果我们每次改完东西都要重新打包项目，再把打包后的产物提交到gh-pages分支上，这无疑是一件非常费时效率低下的事情。如果可以每次修改完代码push到master分支后，github就能帮我们自动打 ...",l:"vision/document/deploy.html#github-actions",a:"github-actions"},"19.0":{t:"markdown扩展",p:`vitepress提供了多种markdown扩展支持，详情可以查看官方文档，这节讲解如何自定义扩展markdown语法
`,l:"vision/document/htmlExtend.md",a:"markdown扩展"},"19.1":{t:"配置",p:"VitePress 使用 markdown-it 作为Markdown的渲染器。许多扩展是通过自定义插件实现。你可以通过 .vitepress/config.js中的markdown选项进一步定制ma ...",l:"vision/document/htmlExtend.md#配置",a:"配置"},"19.2":{t:"自定义-demo-容器",p:`本项目笔记-&gt;CSS中的demo演示就是利用自定义markdown语法实现，
实现思路：

1.被:::demo:::包裹的内容表示为demo所在的文件路径

::: demo
boxSizin ...`,l:"vision/document/htmlExtend.md#自定义-demo-容器",a:"自定义-demo-容器"},"20.0":{t:"前言",p:"本文档使用&lt;a href=&quot;https://vitepress.dev/&quot; target=&quot;_blank&quot;&gt;vitepress&lt;/a&gt;构 ...",l:"vision/document/quickUse.html",a:"前言"},"20.1":{t:"vitepress介绍",p:`VitePress是一个静态网站生成器，基于Vite构建，非常适合用来构建博客和文档，Vue3跟Element-Plus的官方文档都是用它来构建的。
`,l:"vision/document/quickUse.html#vitepress介绍",a:"vitepress介绍"},"20.2":{t:"快速上手",p:`如何从头开始搭建一个简单的 VitePress 文档站点。如果你已经有了一个存在的项目并且向在项目中维护文档，你可以从步骤 3 开始&lt;br&gt;

步骤1：创建项目文件夹

$ mkdir v ...`,l:"vision/document/quickUse.html#快速上手",a:"快速上手"},"21.0":{t:"路由",p:`本节讲解vitepress中的路由跳转
`,l:"vision/document/routing.html",a:"路由"},"21.1":{t:"页面之间如何跳转",p:`在页面之间跳转时，可以使用绝对路径和相对路径。请注意，虽然.md和.html扩展名都可以工作，但最好的做法是省略文件扩展名，以便VitePress可以根据您的配置生成最终的url。
Getting S ...`,l:"vision/document/routing.html#页面之间如何跳转",a:"页面之间如何跳转"},"21.2":{t:"路由重写",p:`您可以自定义源目录结构和生成的页面之间的映射。当你有一个复杂的项目结构时，它很有用。例如，假设你有一个带有多个包的monorepo，并且希望像这样将文档与源文件一起放置:
.
├─ packages
 ...`,l:"vision/document/routing.html#路由重写",a:"路由重写"},"22.0":{t:"添加文档搜索功能",p:`vitepress有提供配置来使用algolia搜索，但是algolia需要申请比较麻烦，本文档使用第三方库vitepress-plugin-search实现文档搜索功能
`,l:"vision/document/search.html",a:"添加文档搜索功能"},"22.1":{t:"安装",p:`npm i vitepress-plugin-search markdown-it flexsearch -D

`,l:"vision/document/search.html#安装",a:"安装"},"22.2":{t:"添加和配置插件",p:`在docs/vite.config.js配置文件中添加如下配置即可。
import { SearchPlugin } from &quot;vitepress-plugin-search&quot;; ...`,l:"vision/document/search.html#添加和配置插件",a:"添加和配置插件"},"22.3":{t:"覆盖搜索样式",p:`需要在.vitepress/theme/index.js下引入样式重新覆盖样式，本项目全局样式在docs/style/index.css。
.DocSearch-Button {
  display: ...`,l:"vision/document/search.html#覆盖搜索样式",a:"覆盖搜索样式"},"23.0":{t:"配置",p:`必要的项目结构
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js // vitepress的配置文件
│  └─ index.md // 默认访问首页文件，后 ...`,l:"vision/document/vitepressConfig.html",a:"配置"},"23.1":{t:"本项目config-js配置文件详解",p:`// 自定义markdown语法，后面另起章节详解
import { mdPlugin } from './config/plugins.js'

module.exports = {
  // 网站 ...`,l:"vision/document/vitepressConfig.html#本项目config-js配置文件详解",a:"本项目config-js配置文件详解"},"23.2":{t:"本项目index-md配置文件详解",p:`访问网站时默认会访问项目根目录下docs文件夹内的index.md，vitepress已经提供了默认页面配置，只需要根据自己的需求设置即可，下面是配置详解
---
layout: home // 表示 ...`,l:"vision/document/vitepressConfig.html#本项目index-md配置文件详解",a:"本项目index-md配置文件详解"},"23.3":{t:"完全自定制首页",p:`可以在docs/.vitepress/theme/index.js文件里的Layout选项中配置自己的首页组件来完全自定制主页，这样就不会访问index.md文件
import Layout from ...`,l:"vision/document/vitepressConfig.html#完全自定制首页",a:"完全自定制首页"},"24.0":{t:"clickoutside指令",p:`clickoutside是ElementUi中的一个自定义指令，在多个组件中有用到该指令，该指令用来处理当点击目标节点外的元素时要做的事情，比如el-select组件关闭下拉框
`,l:"vision/element/clickoutside.html",a:"clickoutside指令"},"24.1":{t:"用法示例",p:`该指令的值对应一个函数，当点击绑定该指令的目标节点外的元素时，会触发该函数
&lt;template&gt;
  &lt;div v-clickoutside=&quot;clickHandler&q ...`,l:"vision/element/clickoutside.html#用法示例",a:"用法示例"},"24.2":{t:"源码解析",p:`import Vue from 'vue';
import { on } from 'element-ui/src/utils/dom';
// on 方式是对监听事件的兼容处理，会根据情况决定使用a ...`,l:"vision/element/clickoutside.html#源码解析",a:"源码解析"},"25.0":{t:"多层级组件间的通讯",p:"ElementUI的源码中大量使用了broadcast和dispatch两个函数，用于在多层级组件间互相通讯，使用了minix的方式将这两个函数植入到了每个组件中，源码位置：src\\mixins\\em ...",l:"vision/element/communication.html",a:"多层级组件间的通讯"},"26.0":{t:"前言",p:`本章节记录一些ElementUI源码解析以及值得学习的地方
`,l:"vision/element/introduce.html",a:"前言"},"26.1":{t:"按需引入的实现",p:`首先element的组件都是放在packages文件夹下，每个组件又都有一个单独的文件夹维护
&lt;Gimage src=&quot;/vision/element/introduce/img1.p ...`,l:"vision/element/introduce.html#按需引入的实现",a:"按需引入的实现"},"26.2":{t:"全局引入的实现",p:`注意到上面那张图中有个install方法吗？没错，我们在全局引入element的时候是这样的：
import Element from 'element';
Vue.use(Element);

而V ...`,l:"vision/element/introduce.html#全局引入的实现",a:"全局引入的实现"},"27.0":{t:"loading组件",p:`element提供了v-loading和this.$loading()这两种方式来实现加载的效果，那么这两种方式分别是怎么实现的呢？
`,l:"vision/element/loading.html",a:"loading组件"},"27.1":{t:"指令式v-loading的实现",p:`指令式调用的实现源码位置：package/loading/src/directive.js，下面是对该源码的解析
import Vue from 'vue';
// loading组件的具体内容
im ...`,l:"vision/element/loading.html#指令式v-loading的实现",a:"指令式v-loading的实现"},"27.2":{t:"服务式this-loading-的实现",p:"服务式的实现其实跟指令式的实现原理也是差不多的，都是利用Vue.extend返回一个组件构造器实现的，往Vue的原型上挂载了一个$loading方法而已。服务式调用的实现源码位置：package/lo ...",l:"vision/element/loading.html#服务式this-loading-的实现",a:"服务式this-loading-的实现"},"27.3":{t:"其它notice组件的实现",p:`除了Loading，elementUI还有多种Notice组件，Alert、Message、MessageBox、Notification，这些实现的原理其实都是一样的，弄懂一个其它的就都很好理解
`,l:"vision/element/loading.html#其它notice组件的实现",a:"其它notice组件的实现"},"28.0":{t:"repeat-click指令",p:`repeat-click指令用来处理有长按点击触发事件（mousedown）需求时，防止频繁的触发事件。
`,l:"vision/element/repeatClick.html",a:"repeat-click指令"},"28.1":{t:"用法示例",p:`该指令的值对应一个函数，当长按点击或者点击绑定该指令的目标节点时，会触发该函数，且最多每100ms只会执行一次该函数
&lt;template&gt;
  &lt;div v-repeat-click ...`,l:"vision/element/repeatClick.html#用法示例",a:"用法示例"},"28.2":{t:"源码解析",p:`import { once, on } from 'element-ui/src/utils/dom';
// once 函数用来处理只执行一次的函数

export default {
  // 绑 ...`,l:"vision/element/repeatClick.html#源码解析",a:"源码解析"},"29.0":{t:"隐藏组件el-scrollbar",p:`el-scrollbar是ElementUi内部使用的隐藏组件，没有在官方文档中列出，这个组件实现了自定义的滚动条。
ElementUi的组件中会产生滚动条的场景都是用自定义的el-scrollbar ...`,l:"vision/element/scrollbar.html",a:"隐藏组件el-scrollbar"},"29.1":{t:"用法示例",p:`&lt;template&gt;
  &lt;!-- 注意点：在使用时要设置外层容器高度。并且要设置el-scrollbar 的高度为100% --&gt;
  &lt;div style=&quot ...`,l:"vision/element/scrollbar.html#用法示例",a:"用法示例"},"30.0":{t:"webpack配置文件",p:`webpack已经内置了一些开箱即用的默认配置，但是这些配置往往无法满足我们的业务需求，所以我们需要自己配置。&lt;br&gt;
webpack的默认配置文件名为webpack.config.js， ...`,l:"vision/webpack/config.html",a:"webpack配置文件"},"30.1":{t:"配置详解",p:`const path = require('path')
module.exports = {
  entry: './src/index.js', // 打包入口文件，这其实是{ main: './ ...`,l:"vision/webpack/config.html#配置详解",a:"配置详解"},"31.0":{t:"webpack打包后的输入内容含义解析",p:`在用webpack打完包后会出现以下的输出内容，那么他们分别是什么意思呢？
&lt;Gimage src=&quot;/vision/webpack/inputContent/img1.png&quo ...`,l:"vision/webpack/inputContent.html",a:"webpack打包后的输入内容含义解析"},"32.0":{t:"loader是什么",p:`webpack默认只能识别解析js文件，当需要处理其它格式的文件，比如.vue、.jpg、.png等，就可以借助loader
`,l:"vision/webpack/loader.html",a:"loader是什么"},"32.1":{t:"如何配置loader",p:`webpack.config.js：
module.exports = {
  module: {
    rules: [
      {
        test: /\\.(jpg|png|gif ...`,l:"vision/webpack/loader.html#如何配置loader",a:"如何配置loader"},"32.2":{t:"常用loader",p:`下面介绍一些项目中常用到的loader
`,l:"vision/webpack/loader.html#常用loader",a:"常用loader"},"32.3":{t:"处理图片的loader",p:"",l:"vision/webpack/loader.html#处理图片的loader",a:"处理图片的loader"},"32.4":{t:"file-loader",p:`file-loader的作用是将文件复制到指定目录下（默认是dist目录），返回该文件的地址，可以处理任何格式的文件
import avatar from './avatar.png'
console ...`,l:"vision/webpack/loader.html#file-loader",a:"file-loader"},"32.5":{t:"url-loader",p:"url-loader的作用跟file-loader的作用很像，只不过它多了个limit的选项，当小于这个值的时候，会直接将其转为base64，而不是复制生成到指定目录下。在webpack.config ...",l:"vision/webpack/loader.html#url-loader",a:"url-loader"},"32.6":{t:"处理样式的loader",p:`
1.打包css文件的话需要用到style-loader，css-loader
2.如果要打包scss文件的话则需要再加上scss-loader
3.如果要使css3的属性自动加上厂商前缀的话再加上p ...`,l:"vision/webpack/loader.html#处理样式的loader",a:"处理样式的loader"},"32.7":{t:"处理字体图标的loader",p:`处理字体图标的话用file-loader,在webpack.config.js中的配置：
module.exports = {
  module: {
    rules: [
      {
    ...`,l:"vision/webpack/loader.html#处理字体图标的loader",a:"处理字体图标的loader"},"33.0":{t:"什么是plugins",p:`plugins即插件，webpack内它会像vue那样，对外暴露一些生命周期钩子，让你可以在这些生命周期内处理一些业务逻辑
`,l:"vision/webpack/plugins.html",a:"什么是plugins"},"33.1":{t:"常用的plugins",p:"",l:"vision/webpack/plugins.html#常用的plugins",a:"常用的plugins"},"33.2":{t:"使用-html-webpack-plugin-和-clean-webpack-plugin-让打包更便捷",p:"没有借助插件前，每次打包的时候都要手动删除dist文件夹，还得重新编写index.html文件，大大降低了开发效率，html-webpack-plugin和clean-webpack-plugin帮我 ...",l:"vision/webpack/plugins.html#使用-html-webpack-plugin-和-clean-webpack-plugin-让打包更便捷",a:"使用-html-webpack-plugin-和-clean-webpack-plugin-让打包更便捷"},"33.3":{t:"html-webpack-plugin",p:`作用：每次打包结束后会生成一个index.html文件。
在webpack.config.js配置文件中写如下代码：
// HtmlWebpackPlugin插件可以在webpack打包结束后，自动生 ...`,l:"vision/webpack/plugins.html#html-webpack-plugin",a:"html-webpack-plugin"},"33.4":{t:"clean-webpack-plugin",p:`作用：每次打包之前先删除dist文件夹
// CleanWebpackPlugin插件可以在webpack打包之前，先删除指定的文件夹（具体删除哪个根据new CleanWebpackPlugin([ ...`,l:"vision/webpack/plugins.html#clean-webpack-plugin",a:"clean-webpack-plugin"},"34.0":{t:"webpack是什么",p:`webpack是一个模块打包工具，可以把多个模块打包在一起
`,l:"vision/webpack/start.html",a:"webpack是什么"},"34.1":{t:"前端编程方式发展史",p:`远古时期的开发方式：html+css+js
index.html文件：
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head& ...`,l:"vision/webpack/start.html#前端编程方式发展史",a:"前端编程方式发展史"},"34.2":{t:"用-webpack-解决上面的问题",p:`index.html文件：
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset ...`,l:"vision/webpack/start.html#用-webpack-解决上面的问题",a:"用-webpack-解决上面的问题"},"34.3":{t:"安装",p:`建议局部安装，不要全局安装
npm install webpack webpack-cli -D

`,l:"vision/webpack/start.html#安装",a:"安装"},"34.4":{t:"webpack-cli的作用",p:`使得我们可以在命令行里面输入webpack的命令
`,l:"vision/webpack/start.html#webpack-cli的作用",a:"webpack-cli的作用"}},i={previewLength:100,buttonLabel:"搜索",placeholder:"情输入关键词",encode:!1,tokenize:"full"},n={INDEX_DATA:e,PREVIEW_LOOKUP:t,Options:i};export{n as default};