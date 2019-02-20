import fs from 'fs';
import path from 'path';

const config = {
  plugins: [
    '@babel/transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    'lodash',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'auto',
        useBuiltIns: 'usage',
        targets: {
          browsers: ['>0.25%'],
          node: 8,
        },
      },
    ],
    '@babel/react',
    // "@babel/typescript",
  ],
};

export default (env: any) => {
  const { APP_projectName } = env;
  const babelConfig = path.resolve(
    __dirname,
    `packages/${APP_projectName}/babel.config.ts`,
  );
  if (fs.existsSync(babelConfig)) {
    const getProjectBabelCfg = require(babelConfig).default;
    return getProjectBabelCfg(config, env);
  } else {
    return config;
  }
};
