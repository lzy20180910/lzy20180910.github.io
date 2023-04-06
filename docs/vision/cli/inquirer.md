# inquirer的使用
`inquirer`是一个用来实现命令行交互式界面的工具集合。它帮助我们实现与用户的交互式交流，比如给用户提一个问题，用户给我们一个答案，我们根据用户的答案来做一些事情。

## 安装
```shell
npm install inquirer --save
```

## 使用
```js
// 引入 inquirer
const inquirer = require('inquirer');
// 启动 inquirer
inquirer
// 交互内容，参数为数组，放置向用户提问的问题
.prompt([])  
// 收集用户答案后的回调，会以键值对的方式存储在这里  
.then((answers) => {  })  
// 捕获错误的回调  
.catch((error) => {  });
```
`default,choices,validate,filter 以及when`的值为函数时，可以异步调用，也可以返回一个Promise或者使用this.async()方法来获得一个回调，然后使用最终值来调用它

```js
{  
    filter() {    
        return new Promise();
    },  
    validate: function (input) {
        var done = this.async();    
        setTimeout(function() {
        if (typeof input !== 'number') {        
            done('You need to provide a number');        
            return;      
        }      
        done(null, true);    
        }, 3000);  
    }
}
```

### prompt方法
接收一个参数，内容为向用户发问的问题，类型为数组，每一项即一个问题，每个问题可以配置如下属性：
```js
const question = [{
    type: 'input', // 问题的类型，常用的类型有input（输入框）、number（数值）、confirm（确认类型）、list（单选项）、checkbox（复选框）、password（密码）
    name：'keyName', // key值，用户完成交互后最终会把所有答案作为参数传给最终的then方法，到时就是用这个值来区分是哪个问题的答案
    message: '是否单身？', // 问题的描述
    default: '', // 问题的默认值
    choices: [], // 列表选项，在某些类型下可用，比如checkbox类型
    validate: (answer => {}), // 对用户的回答进行校验，只有返回 true 的时候才会向下进行
    filter: (answer => {}), // 对用户的回答进行过滤处理，返回处理后的值，会修改用户提交的值
    transformer: (answer => {}), // 对用户回答的显示效果进行处理(如：修改回答的字体或背景颜色)，但不会影响最终的答案的内容
    when: (answers=> {}), // 根据前面问题的回答，判断当前问题是否需要被回答
    pageSize: 2, // 修改某些 type 类型下的渲染行数，比如checkbox类型，choices设置了5个选项，那么界面只会渲染2个选项，多余的选项通过键盘的上下键切换显示
    prefix: '🟢', // 修改 message 默认前缀，渲染在问题前面
    suffix: '🟡', // 修改 message 默认后缀，渲染在问题后面
    mask: // 修改 type 为 password 时的显示模式
}]
```

### 各种交互类型使用例子：
1）input：
```js
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      message: '请输入姓名',
      name: 'name',
      default: 'Michael',
      validate: (answer) => {
        if (answer.length < 2) {
          return '名字最少要两个字';
        }
        return true
      }
    },
  ])
  .then((answers) => {
    console.log('用户输入的所有答案：', answers);
  })
  .catch((error) => {
    console.log(error)
  })
```
<Gimage src="/vision/cli/inquirer/img1.png"/>

2）number：数字交互，输入的内容会自动转换为 number 类型，如果输入的不是数字，会被转换成 NaN
```js
inquirer
  .prompt([
    {
      type: 'number',
      message: '请输入年龄',
      name: 'age',
    }
  ])
  .then((answers) => {
    console.log('用户输入的所有答案：', answers);
  })
  .catch((error) => {
    console.log(error)
  })
```
<Gimage src="/vision/cli/inquirer/img2.png"/>

3）comfirm：确认交互，默认值在界面上会以大写字母的方式进行展示。
```js
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'confirm',
      message: '是否单身?',
      name: 'single',
      default: 'true'
    }
  ])
  .then((answers) => {
    console.log('用户输入的所有答案：', answers);
  })
  .catch((error) => {
    console.log(error)
  })
```
<Gimage src="/vision/cli/inquirer/img3.png"/>

4）list：列表单选框
```js
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'list',
      message: '请选择你的老婆',
      name: 'wife',
      default: 0,
      choices: [
        {
          value: 1,
          name: '赵今麦',
        },
        {
          value: 2,
          name: '谭松韵',
        },
        {
          value: 3,
          name: '毛晓彤',
        },
        {
          value: 4,
          name: '新垣结衣',
        },
      ]
    }
  ])
  .then((answers) => {
    console.log('用户输入的所有答案：', answers);
  })
  .catch((error) => {
    console.log(error)
  })
```
<Gimage src="/vision/cli/inquirer/img4.png"/>


5）password：密码交互，可以隐藏用户输入的内容，通过 mask 属性来修改显示方式，一种是 隐藏 输入，一种是用 * 代替输入
```js
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'password',
      message: '请输入密码1:',
      name: 'password1',
    },
    {
      type: 'password',
      message: '请输入密码2:',
      name: 'password2',
      mask: true,
    }
  ])
  .then((answers) => {
    console.log('用户输入的所有答案：', answers);
  })
  .catch((error) => {
    console.log(error)
  })
```
<Gimage src="/vision/cli/inquirer/img5.png"/>

when方法的使用：when 的回调参数是前面所有问题的答案，只有返回值为 true 的时候，才会出现当前问题的交互。
```js
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'confirm',
      message: '是否单身？',
      name: 'single',
      default: true,
    },
    {
      type: 'confirm',
      message: '是否需要女朋友？',
      name: 'girl',
      when: function (answers) {
        // 当 single 为 true 的时候才会提问当前问题
        return answers.single;
      },
    }
  ])
  .then((answers) => {
    console.log('用户输入的所有答案：', answers);
  })
  .catch((error) => {
    console.log(error)
  })
```
<Gimage src="/vision/cli/inquirer/img6.png"/>


### 使用shelljs执行系统命令、文件操作
```js
#!/usr/bin/env node
const shell = require('shelljs')

// 1.判定git命令是否可用
if (!shell.which('git')) {
  //向命令行打印git命令不可用的提示信息
  shell.echo('Sorry, this script requires vue')
  //退出当前进程
  shell.exit(1)
}

// 2.进入当前目录下的src文件夹
shell.cd('src')
// 进入上一级文件夹
shell.cd('..')

// 3.cat方法：读取文件内容
// cat([options,] file [, file ...])
// 将一个或多个文件内容读入，指定一个文件时读入该文件，指定多个文件时将内容连接在一起读入。
console.log(shell.cat('macro.js'))

// 4.ls方法什么参数都没传就会获取当前目录下的所有文件列表，传入'*.js'的话就会获取当前目录下后缀为js的所有文件
shell.ls('*.js').forEach(function (file) {
  // 5.sed([options,] search_regex, replacement, file_array(可以是单个文件也可以是多个))
  // 第一个参数常用参数 -i:表示直接作用源文件
  // 第二个参数为匹配的内容，可以使用正则
  // 第三个参数为替换的内容
  // 第四个参数为文件，可以是数组
  // sed方法：将file_array中符合search_regex的内容替换为replacement，支持正则的捕获组自引用。
  // 一次处理一行内容，处理完成后把缓冲区内容送往屏幕，然后处理下一行，循环直至结束。
  
  //将build_version字段替换为'v0.1.2'
  shell.sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
  //将包含`REMOVE_THIS_LINE`字符串的行删除
  shell.sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file);
  //将包含`REPLACE_LINE_WITH_MACRO`字符串的行替换为`macro.js`中的内容
  shell.sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat('macro.js'), file);
})


// 6.cp方法用来将一个或多个源文件或目录复制到指定的文件或目录。
// 第一个参数表示递归处理文件
// 第二个参数为被复制的文件路径，可以传数组，
// 第三个参数为目标文件
shell.cp('-R', 'sourceFile', '../copyDir')

// 7.rm方法用来删除指定文件
// 第一个参数常用的参数:
// -f:强制删除文件;
// -i:删除之前先询问用户;
// -r:递归处理目录;
// -v:显示处理过程;
// 这边-rf的意思为递归强制删除文件
// 第二个参数为要删除的文件路径，也是可以传数组
shell.rm('-rf', 'removeFile')

// 7.exec方法：调用系统命令，下方命令为克隆拉取git远程文件到当前templateDir文件夹下
const res = shell.exec('git clone git@github.com:lzy20180910/test.git templateDir/')
// code不等于0表示执行失败
if (res.code != 0) {
  shell.echo('Error: Git clone failed');
  shell.exit(1);
}
```