<template>
  <div class="margin-b20">
    <span class="">
      text-transform: 
      <span class="green bold">{{styleVal}}</span>
    </span>
  </div>
  <div class="margin-b20">
    <span :style="{'text-transform': styleVal}">hello world</span>
  </div>
  <el-button type="primary" @click="styleVal = 'uppercase'">uppercase</el-button>
  <el-button type="primary" @click="styleVal = 'lowercase'">lowercase</el-button>
  <el-button type="primary" @click="styleVal = 'capitalize'">capitalize</el-button>
  <el-button type="primary" @click="styleVal = 'none'">none</el-button>
</template>

<script setup>
import { ref } from 'vue'
const styleVal = ref('none')
</script>