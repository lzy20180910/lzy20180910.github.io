<template>
  <div class="margin-b20">
    <span>
      justify-content: 
      <span class="green bold">{{list[num]}}</span>
    </span>
  </div>
  <div>
    <div class="flex-container" :style="{'justify-content': list[num]}">
      <div class="flex-item" v-for="item in 3" :key="item">{{item}}</div>
    </div>
  </div>
  <el-button type="primary" @click="toggle">切换属性值</el-button>
</template>

<script setup>
import { ref } from 'vue'
const num = ref(0)
const list = [
  'center',
  'flex-start',
  'flex-end',
  'space-around',
  'space-between'
]
function toggle() {
  if (num.value >= 4) {
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