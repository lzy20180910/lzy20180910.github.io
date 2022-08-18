<template>
  <div class="margin-b20">
    <span>
      list-style-image: 
      <span class="green bold">url('{{list[num]}}')</span>
    </span>
  </div>
  <div class="margin-b20">
    <ul :style="{'list-style-image': `url(${list[num]})`}">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ul>
  </div>
  <el-button type="primary" @click="toggle">切换图像列表项标记</el-button>
</template>

<script setup>
import { ref } from 'vue'
const num = ref(0)
const list = [
  '../../.vitepress/public/icon1.png',
  '../../.vitepress/public/icon2.png',
  '../../.vitepress/public/icon3.png'
]
function toggle() {
  if (num.value >= 2) {
    num.value = 0
    return
  }
  num.value++
}
</script>