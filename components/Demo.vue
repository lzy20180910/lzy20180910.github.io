<template>
  <div class="example">
    <component :is="formatPathDemos[path]"></component>
  </div>

  <ElCollapseTransition>
    <div class="source" v-show="show">
      <highlightjs autodetect :code="fileSource" />
    </div>
  </ElCollapseTransition>

  <div class="source toggle" @click="toggleShow">
    <el-icon v-if="!show"><CaretBottom /></el-icon>
    <el-icon v-else><CaretTop /></el-icon>
    {{show ? '隐藏源码' : '查看源码'}}
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const show = ref(false)
const props = defineProps({
  path: String,
  demos: Object,
  source: String
})
const formatPathDemos = computed(() => {
  const demos = {}

  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../examples/', '').replace('.vue', '')] =
      props.demos[key].default
  })

  return demos
})

function toggleShow() {
  show.value = !show.value
}

const fileSource = computed(() => decodeURIComponent(props.source))

</script>
<style scoped>
  .source {
    border: 1px solid #4C4D4F;
    margin-top: -1px;
  }
  .source :deep(pre){
    margin: 0;
  }
  .toggle {
    text-align: center;
    color: #A3A6AD;
    line-height: 44px;
    cursor: pointer;
  }
  .toggle:hover {
    color: #409EFF;
  }
</style>
