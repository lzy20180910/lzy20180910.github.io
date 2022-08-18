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
  display: flex;
}
.flex-item {
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
}
.div1 {
  flex-grow: 1;
  width: 100px;
  background-color: #33a06f;
}
.div2 {
  flex-grow: 2;
  width: 200px;
  background-color: red;
}
</style>