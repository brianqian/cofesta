import express from 'express';
import next from 'next';
import morgan from 'morgan';

const port = parseInt(`${process.env.PORT}`, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(morgan('dev'));

  server.get('/_next/*', (req, res) => {
    handle(req, res);
  });

  server.get('/static/*', (req, res) => {
    handle(req, res);
  });

  server.get('/', async (req, res) => {
    app.render(req, res, '/index');
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log('Mode:', process.env.NODE_ENV);
    console.log(`> Frontend ready on port:${port}`);
  });
});
