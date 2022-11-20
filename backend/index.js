const express = require('express');
const morgan = require('morgan');

const scamRouter = require('./routes/scamRouter');

// DB
const db = require('./config/database');


const initServer = () => {
  const app = express();
  app.use(morgan('dev'));
  app.use(express.json());
  app.use('/scams', scamRouter);
  return app;
};

const hostname = 'localhost';
const port = 3000;

initServer()
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log);
