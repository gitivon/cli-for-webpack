## a cli for multi project

> 开箱即用项目脚手架，已支持 react vue 

### 特点

1. 多个项目用同一套配置，同时也可以用自己配置覆盖默认设置
2. 每个项目都可以是SPA或者MPA，不限
3. 不限框架，你甚至可以一个页面里同时使用 angular、vue 和 react
4. 默认开启 postcss, less, sass 支持
5. ts 作为第一语言，也兼容 js
6. 使用 dotenv 和 definePlugin 将 .env 中变量注入 window.process.env 中

### todo

[] htm  
[] angular  
[] yeoman  


``` bash
// 开发模式
yarn start --env.project={project}
// 构建打包
yarn build --env.project={project}
// 统计包体积
yarn analytics --env.project={project}
// 发布 stage
yarn tag
yarn prettier
yarn lint

```
