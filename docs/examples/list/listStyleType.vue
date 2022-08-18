<template>
  <div class="margin-b20">
    <span>
      list-style-type: 
      <span class="green bold">{{list[num]}}</span>
    </span>
  </div>
  <div class="margin-b20">
    <ul :style="{'list-style-type': list[num]}">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca Cola</li>
    </ul>
  </div>
  <el-button type="primary" @click="toggle">切换属性值</el-button>
</template>

<script setup>
import { ref } from 'vue'
const num = ref(0)
const list = [
  'none',
  'disc',
  'circle',
  'square',
  'decimal',
  'decimal-leading-zero',
  'lower-alpha',
  'upper-alpha',
  'lower-roman',
  'upper-roman'
]
function toggle() {
  if (num.value >= 9) {
    num.value = 0
    return
  }
  num.value++
}
</script>