<template>
  <div class="div1">
    现在两个 div 的大小相同！
  </div>
  <div class="div2">
    Hooray!
  </div>
</template>

<script setup>
</script>

<style scoped>
.div1 {
    width: 300px;
    height: 100px;
    border: 1px solid blue;
    box-sizing: border-box;
    margin-top: 15px;
}
.div2 {
    width: 300px;
    height: 100px;
    padding: 50px;
    border: 1px solid red;
    box-sizing: border-box;
    margin-top: 15px;
}
</style>