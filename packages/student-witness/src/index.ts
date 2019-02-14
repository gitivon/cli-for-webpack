import get from 'lodash/get';
import { c } from '//components/utils';
import { lib } from './utils/lib';

export class Test {
  a = '2';
}
(async () => {
  const { timeout } = await import('@/utils');
  console.log(get({ a: { b: 5 } }, 'a.b'));
  await timeout(3000);
  const s = process.env.AUTO;
  console.log(process.env);
  console.log(new Test());
  // debugger();

})();

