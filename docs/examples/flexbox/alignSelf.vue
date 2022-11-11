<template>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item" style="align-self: center">3</div>
    <div class="flex-item">4</div>
  </div>
</template>

<script setup>
</script>
<style scoped>
.flex-container {
  display: flex;
  height: 200px;
  align-items: flex-start;
  background: #fff;
}
.flex-item {
  width: 100px;
  background-color: #33a06f;
  margin-right: 20px;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
}
</style>