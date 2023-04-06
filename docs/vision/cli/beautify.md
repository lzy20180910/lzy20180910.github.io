# 美化控制台输出
使用`ora`跟`chalk`可以帮我们美化控制台输出
```js
const chalk = require('chalk');
const ora = require('ora');
const spinner = ora();
// ora可以加载一个刷新的图标提示用户
// chalk可以修改打印到控制台的内容样式，比如颜色
spinner.start('开始初始化...');
console.log(chalk.green('Created an project'))
setTimeout(() => {
    spinner.succeed('初始化完毕');
    console.log(chalk.red('Created an project'))
}, 3000);
```

## `chalk`内置字体颜色：
- black 黑色
- red 红色
- green 绿色
- yellow 黄色
- blue 蓝色
- magenta 品红
- cyan 青色
- white 白色
- redBright 亮红，感觉跟red区别不大
- greenBright 亮绿
- yellowBright 亮黄
- blueBright 亮蓝
- magentaBright 亮品红
- cyanBright 亮青
- whiteBright 亮白

```js
console.log(chalk.magenta('---- Hello Chalk 12----'));
console.log(chalk.cyan('---- Hello Chalk 13----'));
console.log(chalk.redBright('---- Hello Chalk 15----'))
console.log(chalk.greenBright('---- Hello Chalk 16----'));
console.log(chalk.blueBright('---- Hello Chalk 17----'));
console.log(chalk.yellowBright('---- Hello Chalk 18----'));
console.log(chalk.magentaBright('---- Hello Chalk 19----'));
console.log(chalk.cyanBright('---- Hello Chalk 20----'));
console.log(chalk.whiteBright('---- Hello Chalk 21----'));
```
<Gimage src="/vision/cli/beautify/img1.png"/>

## `chalk`内置字体背景颜色：
```js
console.log(chalk.bgBlack('---- Hello Chalk 12----'));
console.log(chalk.bgRed('---- Hello Chalk 12----'));
console.log(chalk.bgGreen('---- Hello Chalk 12----'));
console.log(chalk.bgYellow('---- Hello Chalk 12----'));
console.log(chalk.bgBlue('---- Hello Chalk 12----'));
console.log(chalk.bgMagenta('---- Hello Chalk 12----'));
console.log(chalk.bgCyan('---- Hello Chalk 13----'));
console.log(chalk.bgBlackBright('---- Hello Chalk 14----'));
console.log(chalk.bgRedBright('---- Hello Chalk 15----'))
console.log(chalk.bgGreenBright('---- Hello Chalk 16----'));
console.log(chalk.bgBlueBright('---- Hello Chalk 17----'));
console.log(chalk.bgYellowBright('---- Hello Chalk 18----'));
console.log(chalk.bgMagentaBright('---- Hello Chalk 19----'));
console.log(chalk.bgCyanBright('---- Hello Chalk 20----'));
console.log(chalk.bgWhiteBright('---- Hello Chalk 21----'));
```
<Gimage src="/vision/cli/beautify/img2.png"/>

## `chalk`使用模板字符串
模块由左花括号(`{`)、样式、一些内容和右花括号(`}`)分隔。这里以官网的例子做示范
```js
const miles = 18;
const calculateFeet = miles => miles * 5280;

console.log(chalk`
  There are {bold 5280 feet} in a mile.
  In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`)
```
<Gimage src="/vision/cli/beautify/img3.png"/>