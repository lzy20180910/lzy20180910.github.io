# 前言
本章节记录一些ElementUI源码解析以及值得学习的地方

## 按需引入的实现
首先`element`的组件都是放在`packages`文件夹下，每个组件又都有一个单独的文件夹维护
<Gimage src="/vision/element/introduce/img1.png"/>

然后每个组件文件夹下都有一个`src`文件夹跟`index.js`文件，`src`文件夹主要是用来写组件内容的
<Gimage src="/vision/element/introduce/img2.png"/>

`index.js`文件提供对外暴露的`install`方法以便后续作为插件使用`Vue.use`插入到全局组件中去
<Gimage src="/vision/element/introduce/img3.png"/>

然后再来看看根目录下的`src/index.js`文件，我们发现它把所有的组件都`import`的进来，然后对外`export default`一个对象，这个对象上面有各个组件的独立`install`方法，这样就实现了按需引入，需要使用什么组件就`import`什么组件就可以了
```js
import {Button, Dialog} form 'element'
Vue.use(Button);
Vue.use(Dialog)
```
<Gimage src="/vision/element/introduce/img4.png"/>
<Gimage src="/vision/element/introduce/img5.png"/>

## 全局引入的实现
注意到上面那张图中有个install方法吗？没错，我们在全局引入element的时候是这样的：
```js
import Element from 'element';
Vue.use(Element);
```
而`Vue.use`的原理就是去调用`install`方法<br>
那么`element`暴露的这个`install`方法做了什么呢？直接上源码
```js
const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.use(InfiniteScroll);
  Vue.use(Loading.directive);
  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
};
```
其中4到6行的代码就一目了然了（备注：`components`是一个包含所有上面`import`进来的组件数组）

