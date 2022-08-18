<template>
  <div class="margin-b20">
    <span class="">
      text-indent: 
      <span class="green bold">{{styleVal}}px</span>
    </span>
  </div>
  <div class="margin-b20">
    <p :style="{'text-indent': styleVal + 'px'}">In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</p>
  </div>
  <el-form-item label="设置缩进">
    <el-input-number v-model="styleVal" :min="0"></el-input-number>
  </el-form-item>
</template>

<script setup>
import { ref } from 'vue'
const styleVal = ref(0)
</script>