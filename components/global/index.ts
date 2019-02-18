import Raven from 'raven-js';
// @ts-ignore
import { config } from '@/config';


Raven.config(config.SENTRY_DSN).install();
