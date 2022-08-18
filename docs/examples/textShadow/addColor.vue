<template>
  <div class="margin-b20">
    <span class="">
      text-shadow: 
      <span class="green bold">2px 2px {{styleVal}}</span>
    </span>
  </div>
  <div class="margin-b20">
    <h1 :style="{'text-shadow': `2px 2px ${styleVal}`}">文字阴影效果！</h1>
  </div>
  <el-button type="primary" @click="styleVal = 'red'">添加红色阴影</el-button>
  <el-button type="primary" @click="styleVal = 'green'">添加绿色阴影</el-button>
  <el-button type="primary" @click="styleVal = 'blue'">添加蓝色阴影</el-button>
</template>

<script setup>
import { ref } from 'vue'
const styleVal = ref('red')
</script>