import { Router } from 'express';

const adminRouter = Router({ mergeParams: true });

adminRouter.use((req, res, next) => {
  if (req.get('X-XSRF-TOKEN')) {
    if (req.get('X-XSRF-TOKEN') === process.env.ADMIN_TOKEN) {
      return next();
    }
  }

  res.sendStatus(401);

});

adminRouter.get('/flag', (_req, res) => {
  res.send(process.env.FLAG)
});

export default adminRouter;
