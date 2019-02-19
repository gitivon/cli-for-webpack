// 全局声明svg component定义
// declare interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  // import React from 'react';
  const content: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  // const content: any;
  export default content;
}
