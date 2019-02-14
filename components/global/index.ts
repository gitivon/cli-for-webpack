import Raven from 'raven-js';

Raven
  .config(process.env.SENTRY_DSN)
  .install();
  