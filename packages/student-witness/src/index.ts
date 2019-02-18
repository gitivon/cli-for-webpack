import get from 'lodash/get';
import { lib } from './utils/lib';
import '#/components/global';
import './assets/style.less';
import { c } from '#/components/utils';

console.log(c);

// rem换算zx
const resizeEvt = "orientationchange" in window ? "orientationchange" : "resize"
const docEl = document.documentElement
function resizeFn() {
  let docW = docEl.clientWidth
  if (docW > 375) {
    docW = 375
  }
  docEl.style.fontSize = (docW * 16) / 375 + "px"
}
resizeFn()
window.addEventListener(resizeEvt, resizeFn)