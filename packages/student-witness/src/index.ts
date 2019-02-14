import get from 'lodash/get';
import { c } from '//components/utils';

export class Test {
  a = '2';
}
(async () => {
  const { timeout } = await import('@/utils');
  console.log(get({ a: { b: 5 } }, 'a.b'));
  await timeout(3000);
  console.log(process.env);
  console.log(new Test());
})();
