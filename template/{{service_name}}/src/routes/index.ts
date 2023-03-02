import Router from "@koa/router";


let router = new Router();

router.get('/healthcheck', (ctx, next) => {
  ctx.body = {healthy: true};
  ctx.status = 200;
});

export default router;