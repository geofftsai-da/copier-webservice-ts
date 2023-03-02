import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import responseTime from 'koa-response-time';
import pinoLogger = require('koa-pino-logger');
 
import { logger } from "@/shared/logger";
import config, { setupConfig } from '@/shared/config';

import router from '@/routes'

const main = async () => {
  await setupConfig()
  const app = new Koa();

  app.use(bodyParser());
  app.use(responseTime());
  app.use(pinoLogger());
  app.use(router.routes()).use(router.allowedMethods());
  
  app.listen(config.get('PORT'));
  logger.info(`:rocket: Server ready at http://localhost:${config.get('PORT')}`);
}



main();