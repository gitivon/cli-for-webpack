import dotenv from 'dotenv';
import { resolve } from 'path';
import fs from 'fs';
import { AppGlobalConfig } from './global.config';
import { ConfigParse } from '.';

export const configInit = (project: string) => {
  const dir = `../../packages/${project}/`;
  const globalPath = resolve(__dirname, `../../.env`);
  const defaultPath = resolve(__dirname, `${dir}.env`);
  const path = resolve(__dirname, `${dir}.env.${process.env.NODE_ENV}`);
  const localPath = resolve(
    __dirname,
    `${dir}.env.${process.env.NODE_ENV}.local`,
  );
  dotenv.config({ path: localPath });
  dotenv.config({ path });
  dotenv.config({ path: defaultPath });
  dotenv.config({ path: globalPath });
  const appCfgFile = `${dir}app.config.ts`;
  let cfg: ConfigParse;
  if (fs.existsSync(appCfgFile)) {
    const { AppConfig } = require(`${dir}app.config`);
    cfg = new AppConfig();
  } else {
    cfg = new AppGlobalConfig();
  }
  cfg.parse(process.env);
  return cfg;
};
