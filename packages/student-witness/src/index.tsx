import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from '@/assets/more.svg';
import styled from 'styled-components';

const Page = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #000;
  color: #FFF;
`;

class App extends React.Component {
  render() {
    return (
      <Page>
        <h1>优秀学员故事</h1>
        <Icon width="19" height="18" />
      </Page>
    )
  }
}

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
