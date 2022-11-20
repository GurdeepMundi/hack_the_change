const express = require('express');
const scamAdd = require('../controller/scamController').add;

const router = express.Router();

router.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Will send all the scams to you!');
  })
  .post((req, res, next) => {
    scamAdd(req, res)
      .then(() => res.end(`Will add the scam: ${req.body.id} with details: ${req.body.description}`))
      .catch((error) => res.status(400).send(error));
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /scams');
  })
  .delete((req, res, next) => {
    res.end('Deleting all scams');
  });

router.route('/:scamId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end(`Will send details of scam: ${req.params.scamId} to you!`);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /scams/${req.params.scamId}`);
  })
  .put((req, res, next) => {
    const message = `Updating the scam: ${req.params.scamId}
Will update the scam: ${req.body.name} with details: ${req.body.description}`;
    res.end(message);
  })
  .delete((req, res, next) => {
    res.end(`Deleting scam: ${req.params.scamId}`);
  });

module.exports = router;
