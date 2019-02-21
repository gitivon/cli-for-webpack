<template>
  <div>
    <h1>Hello, {{a}}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  public a: string = 'TSX';
}
</script>
<style lang="less" scoped>
@--color: #aaa;

h1 {
  color: @--color;
}
input {
  border: 1px solid @--color;
}
</style>