<template>
  <div class="margin-b20">
    <span class="">
      text-decoration: 
      <span class="green bold">{{styleVal}}</span>
    </span>
  </div>
  <div class="margin-b20">
    <span :style="{'text-decoration': styleVal}">hello world</span>
  </div>
  <el-button type="primary" @click="styleVal = 'overline'">overline</el-button>
  <el-button type="primary" @click="styleVal = 'line-through'">line-through</el-button>
  <el-button type="primary" @click="styleVal = 'underline'">underline</el-button>
  <el-button type="primary" @click="styleVal = 'none'">none</el-button>
</template>

<script setup>
import { ref } from 'vue'
const styleVal = ref('none')
</script>