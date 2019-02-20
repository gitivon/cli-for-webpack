import Vue from 'vue';
import React from 'react';
import ReactDOM from 'react-dom';
import VueApp from './components/App.vue';
import ReactApp from './components/App';

new Vue({
  el: '#vue',
  render: (h) => h(VueApp),
});

ReactDOM.render(
  <ReactApp />,
  document.getElementById('react'),
);
