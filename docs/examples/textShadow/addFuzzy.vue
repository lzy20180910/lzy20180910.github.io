<template>
  <div class="margin-b20">
    <span class="">
      text-shadow: 
      <span class="green bold">2px 2px {{styleVal}}px red</span>
    </span>
  </div>
  <div class="margin-b20">
    <h1 :style="{'text-shadow': `2px 2px ${styleVal}px red`}">文字阴影效果！</h1>
  </div>
  <el-form-item label="设置模糊效果">
    <el-input-number v-model="styleVal" :min="0"></el-input-number>
  </el-form-item>
</template>

<script setup>
import { ref } from 'vue'
const styleVal = ref(0)
</script>