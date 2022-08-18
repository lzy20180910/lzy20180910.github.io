<template>
  <div class="flex-container">
    <div class="flex-item div1">A</div>
    <div class="flex-item div2">B</div>
  </div>
</template>

<script setup>
</script>
<style scoped>
.flex-container {
  width: 400px;
  height: 150px;
  display: flex;
  border: 1px solid blue;
  box-sizing: content-box;
}
.flex-item {
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
}
.div1 {
  flex-shrink: 0;
  width: 200px;
  background-color: #33a06f;
}
.div2 {
  width: 300px;
  background-color: red;
}
</style>