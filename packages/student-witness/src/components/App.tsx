import { Component, Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';

@Component
export class App extends Vue {
  a = 'A';

  render(h: CreateElement) {
    return (<div>{a}</div>);
  }
}