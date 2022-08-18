<template>
  <div class="margin-b20">
    <span class="">
      text-shadow: 
      <span class="green bold">{{x}}px {{y}}px</span>
    </span>
  </div>
  <div class="margin-b20">
    <h1 :style="{'text-shadow': `${x}px ${y}px`}">文字阴影效果！</h1>
  </div>
  <el-form-item label="设置水平阴影">
    <el-input-number v-model="x" :min="0"></el-input-number>
  </el-form-item>
  <el-form-item label="设置垂直阴影">
    <el-input-number v-model="y" :min="0"></el-input-number>
  </el-form-item>
</template>

<script setup>
import { ref } from 'vue'
const x = ref(0)
const y = ref(0)
</script>