# repeat-click指令
`repeat-click`指令用来处理有长按点击触发事件（`mousedown`）需求时，防止频繁的触发事件。

## 用法示例：
该指令的值对应一个函数，当长按点击或者点击绑定该指令的目标节点时，会触发该函数，且最多每100ms只会执行一次该函数
```vue
<template>
  <div v-repeat-click="repeatClickHandler"><div>
</template>
<script>
  import RepeatClick from 'element-ui/src/directives/repeat-click';
  export default {
    directives: { RepeatClick },
    methods: {
      repeatClickHandler() {
        // do something...
      }
    }
  }
</script>
```

## 源码解析
```js
import { once, on } from 'element-ui/src/utils/dom';
// once 函数用来处理只执行一次的函数

export default {
  // 绑定该指令的dom元素在按下鼠标后会每隔100ms触发执行指令绑定的回调函数。在松开鼠标后如果和按下鼠标的时刻差不到100ms也会触发回调函数。总的来说，就是长按鼠标时，会隔100ms触发回调函数。短按时，不到100ms也会触发回调函数。
  bind(el, binding, vnode) {
    let interval = null;
    let startTime;
    const handler = () => vnode.context[binding.expression].apply();
    const clear = () => {
      if (Date.now() - startTime < 100) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    on(el, 'mousedown', (e) => {
      if (e.button !== 0) return;
      startTime = Date.now();
      once(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, 100);
    });
  }
};

```