# clickoutside指令
`clickoutside`是`ElementUi`中的一个自定义指令，在多个组件中有用到该指令，该指令用来处理当点击目标节点外的元素时要做的事情，比如`el-select`组件关闭下拉框

## 用法示例：
该指令的值对应一个函数，当点击绑定该指令的目标节点外的元素时，会触发该函数
```vue
<template>
  <div v-clickoutside="clickHandler"><div>
</template>
<script>
  import Clickoutside from 'element-ui/src/utils/clickoutside';
  export default {
    directives: { Clickoutside },
    methods: {
      clickHandler() {
        // do something...
      }
    }
  }
</script>
```

## 源码解析
```js
import Vue from 'vue';
import { on } from 'element-ui/src/utils/dom';
// on 方式是对监听事件的兼容处理，会根据情况决定使用addEventListener方法还是attachEvent
// 因为addEventListener方法与attachEvent方法功能相同．但是addEventListener是W3C标准，而attachEvent非W3C标准，且只支持IE浏览器．
// 虽然addEventListener属于标准方法，但依然无法在IE下运行．IE不支持该方法．

// 节点元素收集器，会将页面中所有绑定了clickoutside指令的dom元素存储起来
const nodeList = [];
// 用来当属性名用的
const ctx = '@@clickoutsideContext';

let startClick; // 点击的元素
let seed = 0;

// 注册鼠标按下事件，缓存点击的元素于startClick
!Vue.prototype.$isServer && on(document, 'mousedown', e => (startClick = e));

// 注册鼠标松开事件，当点击鼠标松开后遍历nodeList，调用其对应的事件处理函数
!Vue.prototype.$isServer && on(document, 'mouseup', e => {
  nodeList.forEach(node => node[ctx].documentHandler(e, startClick));
});

// 为目标节点创建处理函数，当点击目标节点外会触发这个函数
function createDocumentHandler(el, binding, vnode) {
  return function(mouseup = {}, mousedown = {}) {
    // 判断是不是目标节点及其子孙节点
    if (!vnode ||
      !vnode.context ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mouseup.target ||
      (vnode.context.popperElm &&
      (vnode.context.popperElm.contains(mouseup.target) ||
      vnode.context.popperElm.contains(mousedown.target)))) return;

    // 如果点击的是目标节点外的元素就执行对应的方法
    if (binding.expression &&
      el[ctx].methodName &&
      vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
export default {
  // 绑定的时候将目标元素push进nodeList，并且创建其对应的点击事件处理函数
  bind(el, binding, vnode) {
    nodeList.push(el);
    const id = seed++;
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },

  update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },

  // 解绑的时候将其从nodeList移除
  unbind(el) {
    let len = nodeList.length;

    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  }
};

```
