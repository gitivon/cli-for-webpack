import { ConfigParse, Config, Required } from '.';

export class AppGlobalConfig extends ConfigParse {
  @Required() @Config() public SENTRY_DSN!: string;
  @Required() @Config() public NODE_ENV!: 'development' | 'production' | 'test';
  @Config() public DEBUG!: boolean;
}
