<template>
  <div class="margin-b20">
    <span>
      align-content: 
      <span class="green bold">{{list[num]}}</span>
    </span>
  </div>
  <div class="margin-b20">
    <div class="flex-container" :style="{'align-content': list[num]}">
      <div class="flex-item" v-for="item in 15" :key="item">{{item}}</div>
    </div>
  </div>
  <el-button type="primary" @click="toggle">切换属性值</el-button>
</template>

<script setup>
import { ref } from 'vue'
const num = ref(0)
const list = [
  'space-between',
  'space-around',
  'stretch',
  'center',
  'flex-start',
  'flex-end'
]
function toggle() {
  if (num.value >= 3) {
    num.value = 0
    return
  }
  num.value++
}
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  height: 500px;
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