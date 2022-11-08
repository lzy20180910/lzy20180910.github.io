<template>
  <div class="margin-b20">
    <div>navsprites.gif:</div>
    <img :src="imgUrl" alt="" />
  </div>
  <div class="margin-b20">
    <span>
      background: 
      <span class="green bold">url({{imgUrl}}) {{list[num]}}px 0</span>
    </span>
  </div>
  <div class="margin-b20">
    <div :style="{'background': `url(${imgUrl}) ${list[num]}px 0`}" class="imageSprite">
    </div>
  </div>
  <el-button type="primary" @click="toggle">切换图像精灵</el-button>
</template>

<script setup>
import { ref } from 'vue'
import navsprites from '@asset/navsprites.gif'
const num = ref(0)
const imgUrl = ref(navsprites)
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