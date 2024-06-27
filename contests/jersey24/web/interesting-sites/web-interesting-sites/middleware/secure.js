import { Router } from 'express';
import { siteQueue, stats, securityTokens } from '../app.js';

const secureRouter = Router({ mergeParams: true });

secureRouter.use((req, res, next) => {
  if (req.get('X-XSRF-TOKEN')) {
    if (req.get('X-XSRF-TOKEN') === process.env.ADMIN_TOKEN) {
      return next();
    }
  }

  res.sendStatus(401);

});

secureRouter.use((req, res, next) => {
  if (req.get('Authorization')) {
    if (securityTokens.includes(
      req.get('Authorization').split(' ').slice(-1)[0]
    )) {
      return next();
    }
  }

  res.sendStatus(401);
});

secureRouter.post('/interesting', (_req, res) => {
  if (siteQueue.shift() !== undefined) {
    stats.interesting++;
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

secureRouter.post('/not-interesting', (_req, res) => {
  if (siteQueue.shift() !== undefined) {
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

secureRouter.get('/get-site', (_req, res) => {
  if (siteQueue[0] !== undefined) {
    res.json({ 'site': siteQueue[0] });
  } else {
    return res.sendStatus(204);
  }

});

export default secureRouter;
