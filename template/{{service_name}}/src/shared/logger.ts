import pino, { Logger } from 'pino';
import config from '@/shared/config';

export const logger: Logger = pino({
  level: config.get('LOG_LEVEL'),
  mixin: () => {
    return {
      app: 'sample-app'
    }
  },
  formatters: {
    level: (label, number) => {
      return { label, number }
    },
  }
})