<template>
  <h1>
    Hello, {{a}}
  </h1>
</template>
<script>
export default {
  data() {
    return {
      a: 'Vue'
    }
  }
}
</script>
<style lang="less" scoped>
@--color: #F00;

h1 {
  color: @--color;
}
</style>