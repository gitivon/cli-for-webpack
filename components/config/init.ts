import dotenv from 'dotenv';
import { resolve } from 'path';
import { ConfigParse, Config, Required } from '.';

declare namespace NodeJS {
  interface ProcessEnv extends AppConfig {}
}

export const configInit = (project: string) => {
  const dir = `../../packages/${project}/`;
  const globalPath = resolve(__dirname, `../../.env`);
  const defaultPath = resolve(__dirname, `${dir}.env`);
  const path = resolve(__dirname, `${dir}.env.${process.env.NODE_ENV}`);
  const localPath = resolve(__dirname, `${dir}.env.${process.env.NODE_ENV}.local`);
  dotenv.config({ path: localPath });
  dotenv.config({ path });
  dotenv.config({ path: defaultPath });
  dotenv.config({ path: globalPath });
  const cfg = new AppConfig();
  cfg.parse(process.env);
  return cfg;
}

export class AppConfig extends ConfigParse {
  @Required() @Config() public SENTRY_DSN!: string;
  @Config() public DEBUG!: boolean;
}
