# 多层级组件间的通讯
`ElementUI`的源码中大量使用了`broadcast`和`dispatch`两个函数，用于在多层级组件间互相通讯，使用了minix的方式将这两个函数植入到了每个组件中，源码位置：`src\mixins\emitter.js`，下面是对源码的解析：

```js
// 这个函数用来负责调用所有指定组件名称的子孙组件的指定emit事件
// componentName是自定义的组件名称，eventName就是emit的事件名称，params即调用$emit时传递的参数
function broadcast(componentName, eventName, params) {
  // 遍历所有的子组件
  this.$children.forEach(child => {
    // 获取自定义的组件名称
    var name = child.$options.componentName;

    // 如果有找到该组件就调用其$emit方法
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else { // 如果没有就继续向孙子组件查找符合条件的组件
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    // 这个函数用来负责调用所有指定组件名称的父组件的指定emit事件
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      // 向上查找符合条件的父组件
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }

      // 找到后触发其$emit方法
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};

```