import get from 'lodash/get';

export class Test {
  a = '2';
}
(async () => {
  const { timeout } = await import('@/utils');
  console.log(get({ a: { b: 5 } }, 'a.b'));
  await timeout(3000);
  console.log(new Test());
})();
