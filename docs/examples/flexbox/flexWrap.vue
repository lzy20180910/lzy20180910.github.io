<template>
  <div class="margin-b20">
    <span>
      flex-wrap: 
      <span class="green bold">{{list[num]}}</span>
    </span>
  </div>
  <div>
    <div class="flex-container" :style="{'flex-wrap': list[num]}">
      <div class="flex-item" v-for="item in 10" :key="item">{{item}}</div>
    </div>
  </div>
  <el-button type="primary" @click="toggle">切换属性值</el-button>
</template>

<script setup>
import { ref } from 'vue'
const num = ref(0)
const list = [
  'nowrap',
  'wrap'
]
function toggle() {
  if (num.value >= 1) {
    num.value = 0
    return
  }
  num.value++
}
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
  margin-bottom: 20px;
}
</style>