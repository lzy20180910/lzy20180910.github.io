<template>
  <div id="body_box"></div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    }
  },
  methods: {},
  mounted() {}
}
</script>
<style scoped>
#body_box {
  background-color: pink;
  height: 200px;
}
@media screen and (min-width: 480px) {
  #body_box {
    background-color: lightgreen;
  }
}
</style>