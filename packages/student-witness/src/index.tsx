// import get from 'lodash/get';
// import { lib } from './utils/lib';
// import '#/components/global';
import './assets/style.less';
// import { c } from '#/components/utils';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from '@/assets/more.svg';

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <h1>优秀学员故事</h1>
        <Icon width="37" height="35" />
      </div>
    )
  }
}
console.log(process.env);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

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
resizeFn();
window.addEventListener(resizeEvt, resizeFn);