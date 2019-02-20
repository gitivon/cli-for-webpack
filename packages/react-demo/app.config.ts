import { Config } from '../../components/config';
import { AppGlobalConfig } from '../../components/config/global.config';

export class AppConfig extends AppGlobalConfig {
  @Config() TITLE!: string;
  @Config() AUTO!: boolean;
}

// export const config = new AppConfig();
// config.parse(process.env);
