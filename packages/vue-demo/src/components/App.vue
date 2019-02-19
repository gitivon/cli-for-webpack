<template>
  <h1>
    Hello, {{a}}
  </h1>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  public a: string = 'Vue';
}
</script>
<style lang="less" scoped>
@--color: #F00;

h1 {
  color: @--color;
}
</style>