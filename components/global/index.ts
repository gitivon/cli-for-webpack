import Raven from 'raven-js';
// @ts-ignore
Raven.config(process.env.SENTRY_DSN).install();