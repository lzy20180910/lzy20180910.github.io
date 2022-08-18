<template>
  <ol>
    <li>HTML 教程</li>
    <li>CSS 教程</li>
    <li>JavaScript 教程</li>
  </ol>
</template>

<script setup>
</script>

<style scoped>
ol {
  counter-reset: section;
  list-style: none;
}

li::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}
</style>