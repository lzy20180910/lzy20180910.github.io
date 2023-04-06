<template>
  <el-image v-bind="$attrs" :src="src" :preview-src-list="[src]"/>
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
        default: ''
      }
    }
  }
</script>

