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
import { ref  } from 'vue'
import icon1 from '@asset/icon1.png'
import icon2 from '@asset/icon2.png'
import icon3 from '@asset/icon3.png'
const num = ref(0)
const list = [icon1, icon2, icon3]

function toggle() {
  if (num.value >= 2) {
    num.value = 0
    return
  }
  num.value++
}
</script>