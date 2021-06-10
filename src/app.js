const express = require('express');
const {
  notFoundErrorHandler,
  genericErrorHandler,
} = require('./middlewares/error-handler');
const logRequests = require('./middlewares/logger');

const app = express();

app.use(logRequests);
app.use(express.json());

app.use(notFoundErrorHandler);
app.use(genericErrorHandler);

module.exports = app;
