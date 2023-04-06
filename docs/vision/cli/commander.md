# Commander
一个命令行工具往往有复杂的业务逻辑，通常会有大量的命令行参数，Commander可以帮我们轻松的将参数解析为选项和命令参数，让我们更容易编写业务逻辑。

## 安装
```shell
npm install commander --save
```

## 使用方式
### 1.用version指定版本信息
```js
const program = require('commander');
program
  .version('1.0.0')
  .parse(process.argv)
  // 这个就是用来解析参数的，一般都是放在最后执行，
  // 可以用program.parse(process.argv)单独执行
```
在命令输入 `hello-cli -V`或者`hello-cli --version`就可以得到版本信息：

### 2.option方法
作用：option方法用来定义命令的选项，解析短横杠（-）和长横杠（--）这样的命令参数<br>
方法参数说明：<br>
- 自定义选项名称<必须><br>
    > 一长一短的选项名称，中间可以逗号、竖线或空格隔开<br>
    > 选项名称后面可以跟参数，<>定义必需参数，[]定义可选参数
- 选项的描述<可省略>：在使用-h或者--help时会显示
- 选项的默认值<可省略><br>
使用：<br>
（1）定义多个选项：
```js
const program = require('commander');
program
  .version('1.0.0')
  .option('-a, --add <fileName>', 'add Something')
  .option('-u, --update', 'update Something')
  .option('-r, --remove', 'remove Something')
  .parse(process.argv)

// 可以得到在命令行输入的选项，可以通过options.xxx来获取选项对应输入的值
const options = program.opts();
if (options.add) console.log('You choose:  add Something: ' + options.add);
if (options.update) console.log('You choose:  update Something: ' + options.update);
if (options.remove) console.log('You choose:  remove Something: ' + options.remove);
```

在命令行里输入`hello-cli -a dir`，控制台打印输出结果：
<Gimage src="/vision/cli/commander/img1.png"/>

因为在定义`-a`, `--add`的时候，用`<>`指定了`<fileName>`参数，所以这个选项后面必须有值，不然会报错：
<Gimage src="/vision/cli/commander/img2.png"/>

在命令行里输入`hello-cli -u`，控制太打印输出结果：
<Gimage src="/vision/cli/commander/img3.png"/>

（2）多单词形式<br>
当选项为多单词形式时，使用驼峰形式得到输入项
```js
const program = require('commander');
program
  .version('1.0.0')
  .option('-a, --add-file <fileName>', 'add Something')
  .parse(process.argv)

const options = program.opts(); // 可以得到在命令行输入的选项
if (options.addFile) console.log('You choose:  add Something: ' + options.addFile);
```

### 3.command方法
作用：自定义子命令，什么意思呢，当我们创建了`hello-cli`这个命令后，我们可能会用这个命令去做不同的事情，比如`vue create`用来创建模板，`vue xxx`的做其它事情，那么这个时候我们定义多个不同的子命令就可以很好的分工了

```js
const program = require('commander');
program
  .version('1.0.0')

program.command('split')
.description('Split a string into substrings and display as an array')
.argument('<string>', 'string to split')
.option('--first', 'display just the first substring')
.option('-s, --separator <char>', 'separator character', ',')
.action((str, options) => {
  const limit = options.first ? 1 : undefined;
  console.log(str.split(options.separator, limit));
});

program.parse(process.argv)
```

比如上面我们定义了一个名为`split`的子命令，<br>
`description`方法是用来描述这个命令的，我们在命令行里输入`hello-cli help split`的时候会看到对应的信息，`argument`方法用来定义子命令的参数，第一个为参数内容，同样是`<>`表示执行这个子命令时后面必须传参数值，`[]`则表示该参数值不是必须的，第二个参数为该参数的描述，同样是在命令行里输入`hello-cli help split`的时候会看到对应的信息，<br>
`option`方法跟上面讲过的一样，只不过在子命令下定义的选项只属于该子命令，在执行`action`方法时传入的最后一个参数就是该子命令的下的所有选项<br>
`actions`方法就是解析完命令后执行的方法，前面的参数为输入的对应的子命令参数值，最后一个参数就是该子命令的下的所有选项<br>
让我们输入`hello-cli split a/b/c --separator=/`，控制台结果：
<Gimage src="/vision/cli/commander/img4.png"/>

输入hello-cli split a/b/c --separator=/ --first，控制台结果：
<Gimage src="/vision/cli/commander/img5.png"/>

### 4.查看命令的使用
输入`hello-cli -h`或者`hello-cli --help`可以查看我们创建的`hello-cli`命令下所有的信息：
<Gimage src="/vision/cli/commander/img6.png"/>

输入`hello-cli help`子命令明可以查看子命令的描述
<Gimage src="/vision/cli/commander/img7.png"/>
