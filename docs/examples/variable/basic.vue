<template>
  <div class="container">
    <h2>Welcome to Shanghai!</h2>
    <p>Shanghai is one of the four direct-administered municipalities of the People's Republic of China.</p>
    <p>Shanghai is one of the four direct-administered municipalities of the People's Republic of China.</p>
    <p>
      <button>Yes</button>
      <button>No</button>
    </p>
  </div>
</template>

<script setup>
</script>

<style scoped>
div {
  --blue: #1e90ff;
  --white: #ffffff;
}

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