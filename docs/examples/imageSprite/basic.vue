<template>
  <div class="margin-b20">
    <div>navsprites.gif:</div>
    <img src="../../.vitepress/public/navsprites.gif" alt="" />
  </div>
  <div class="margin-b20">
    <span>
      background: 
      <span class="green bold">url('../../.vitepress/public/navsprites.gif') {{list[num]}}px 0</span>
    </span>
  </div>
  <div class="margin-b20">
    <div :style="{'background': `url('../../.vitepress/public/navsprites.gif') ${list[num]}px 0`}" class="imageSprite">
    </div>
  </div>
  <el-button type="primary" @click="toggle">切换图像精灵</el-button>
</template>

<script setup>
import { ref } from 'vue'
const num = ref(0)
const list = [
  '0',
  '-91',
  '-181'
]
function toggle() {
  if (num.value >= 2) {
    num.value = 0
    return
  }
  num.value++
}
</script>

<style scoped>
.imageSprite {
  width: 44px;
  height: 44px;
  display: inline-block;
}
</style>