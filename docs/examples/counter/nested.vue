<template>
  <ol>
    <li>item</li>
    <li>item   
    <ol>
      <li>item</li>
      <li>item</li>
      <li>item
      <ol>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ol>
      </li>
      <li>item</li>
    </ol>
    </li>
    <li>item</li>
    <li>item</li>
  </ol>
</template>

<script setup>
</script>

<style scoped>
ol {
  counter-reset: section;
  list-style-type: none;
}

li::before {
  counter-increment: section;
  content: counters(section,".") " ";
}
</style>