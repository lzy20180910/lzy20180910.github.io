<template>
  <div class="container" id="var_container">
    <h2>Welcome to Shanghai!</h2>
    <p>Shanghai is one of the four direct-administered municipalities of the People's Republic of China.</p>
    <p>Shanghai is one of the four direct-administered municipalities of the People's Republic of China.</p>
    <p>
      <button>Yes</button>
      <button>No</button>
    </p>
  </div>

  <el-button type="primary" @click="change">点击修改蓝色变量为绿色</el-button>
</template>

<script setup>
import { onMounted } from 'vue'

let el = null
onMounted(() => {
  el = document.getElementById('var_container')
})

function change() {
  el.style.setProperty('--blue', 'green');
}
</script>

<style scoped>
#var_container {
  --blue: #1e90ff;
  --white: #ffffff;
}

div { background-color: var(--blue); }

h2 { border-bottom: 2px solid var(--blue); }

.container {
  color: var(--blue);
  background-color: var(--white);
  padding: 15px;
}

button {
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  padding: 5px;
}
</style>