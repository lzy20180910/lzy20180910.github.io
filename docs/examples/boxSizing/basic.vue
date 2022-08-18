<template>
  <div class="div1">
    这个 div 较小<br>（宽度为 300px，高度为 100px）。
  </div>
  <div class="div2">
    这个 div 更大<br>（宽度也为 300px，高度为 100px，但多了内边距50px）。
  </div>
</template>

<script setup>
</script>

<style scoped>
.div1 {
    width: 300px;
    height: 100px;
    border: 1px solid blue;
    box-sizing: content-box;
    margin-top: 15px;
}
.div2 {
    width: 300px;
    height: 100px;
    padding: 50px;
    border: 1px solid red;
    box-sizing: content-box;
    margin-top: 15px;
}
</style>