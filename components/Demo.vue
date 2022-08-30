<template>
  <div>
    <div class="example">
      <component :is="formatPathDemos[path]"></component>
    </div>

    <ElCollapseTransition>
      <div class="source" v-show="show">
        <highlightjs autodetect :code="fileSource" />
      </div>
    </ElCollapseTransition>

    <div v-show="!show" class="source toggle l_margin" @click="toggleShow">
      <el-icon><CaretBottom /></el-icon>查看源码
    </div>
    <div v-show="show" class="source toggle l_sticky" @click="toggleShow">
      <el-icon><CaretTop /></el-icon>隐藏源码
    </div>
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
  }
  .source :deep(pre){
    margin: 0;
  }
  .toggle {
    text-align: center;
    color: #A3A6AD;
    line-height: 44px;
    cursor: pointer;
    background-color: #242424;
  }
  .toggle:hover {
    color: #409EFF;
  }
  .l_sticky {
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
  .l_margin {
    margin-top: -1px;
  }
</style>
