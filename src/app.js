const express = require('express');
const {
  notFoundErrorHandler,
  genericErrorHandler,
} = require('./middlewares/error-handler');
const logRequests = require('./middlewares/logger');
const carRoutes = require('./api/cars/cars.routes');

const app = express();

app.use(logRequests);
app.use(express.json());

app.use('/api/cars', carRoutes);

app.use(notFoundErrorHandler);
app.use(genericErrorHandler);

module.exports = app;
