import dotenv from 'dotenv';
import convict from 'convict';

import { join } from 'path';

const env = process.env.NODE_ENV || 'production';
const envPath = join(__dirname, '..', '..', `.env.${env}`);
dotenv.config({ path: envPath })


export const configManager = convict({
  NODE_ENV: {
    format: ['development', 'production'],
    default: 'production',
    arg: 'nodeEnv',
    env: 'NODE_ENV'
  },
  LOG_LEVEL: {
    format: ['debug', 'info', 'warn', 'error', 'fatal'],
    default: 'info',
    arg: 'logLevel',
    env: 'LOG_LEVEL'
  },
  PORT: {
    format: 'port',
    default: 3000,
    arg: 'port',
    env: 'PORT'
  }
});

export const setupConfig = async () => {
  configManager.validate({ strict: true });
};

export default configManager;