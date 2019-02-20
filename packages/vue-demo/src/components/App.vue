<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  public a: string = 'TSX';
  public val: string = '';

  render() {
    return <div>
      <h1>Hello, {this.a}</h1>
      <p>Your input is: {this.val}</p>
      <input type="text" vModel={this.val} />
    </div>
  }
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