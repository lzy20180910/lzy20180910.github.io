<template>
  <div class="flex-container">
    <div class="flex-item" style="order: 3">1</div>
    <div class="flex-item" style="order: 2">2</div>
    <div class="flex-item" style="order: 4">3</div> 
    <div class="flex-item" style="order: 1">4</div>
  </div>
</template>

<script setup>
</script>
<style scoped>
.flex-container {
  display: flex;
}
.flex-item {
  width: 100px;
  height: 100px;
  background-color: #33a06f;
  margin-right: 20px;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
}
</style>