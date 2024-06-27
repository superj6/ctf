import express from 'express';
import api from './middleware/api.js';
import path from 'path';
import cookieParser from 'cookie-parser';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views/pages');
app.use(express.static('public'));
app.use('/scripts/axios.min.js', express.static(path.resolve(import.meta.dirname, 'node_modules/axios/dist/axios.min.js')));
app.use(cookieParser());

export const siteQueue = [];
export const stats = {
  'total': 0,
  'interesting': 0
};
export const securityTokens = [];

app.get('/', (_req, res) => {
  res.render('index',
    {
      numOfSites: stats.total,
      numOfInteresting: stats.interesting
    });
});
app.get('/login', (_req, res) => { res.render('login'); });
app.get('/admin', (req, res) => {
  if (req.cookies['XSRF-TOKEN']) {
    if (req.cookies['XSRF-TOKEN'] === process.env.ADMIN_TOKEN) {
      return res.render('admin', {
        site: siteQueue[0]
      });
    }
  }

  res.sendStatus(401);
});
app.use('/api', api);

app.listen(80);
console.log('Server is listening on http://localhost:80');
