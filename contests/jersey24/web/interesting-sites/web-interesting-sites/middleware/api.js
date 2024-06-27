import { Router } from 'express';
import express from 'express';
import secureRouter from './secure.js';
import adminRouter from './admin.js';
import { securityTokens, siteQueue, stats } from '../app.js';
import { v4 as uuid } from 'uuid';

const apiRouter = Router({ mergeParams: true });

apiRouter.use(express.json())
apiRouter.use('/secure', secureRouter);
apiRouter.use('/admin', adminRouter);


apiRouter.get('/stats', (_req, res) => {
  res.json(stats);
});

apiRouter.post('/submit-site', (req, res) => {
  if (req.body.site !== undefined) {
    try {
      const url = new URL(req.body.site);
      siteQueue.push(url.toString());
      stats.total++;
    } catch (e) {
      return res.sendStatus(400);
    }
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

apiRouter.post('/login', (req, res) => {
  if (req.body.username !== undefined && req.body.username === process.env.SECRET_USERNAME) {
    if (req.body.password !== undefined && req.body.password === process.env.SECRET_PASSWORD) {
      const secretToken = uuid();
      securityTokens.push(secretToken);
      return res.json({
        'adminToken': process.env.ADMIN_TOKEN,
        'secretToken': secretToken
      });
    }
  }

  res.sendStatus(401);
});

export default apiRouter;
