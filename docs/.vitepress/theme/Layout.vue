<template>
  <h1 @click="clickHandle">Custom Layout!</h1>
  <!-- make sure to include markdown outlet -->
  <!-- <Content /> -->
</template>

<script setup>
function clickHandle() {
  console.log('测试一下下')
}
</script>