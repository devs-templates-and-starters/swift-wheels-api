const express = require('express');
const {
  notFoundErrorHandler,
  genericErrorHandler,
} = require('./middlewares/error-handler');
const logRequests = require('./middlewares/logRequests');
const carRoutes = require('./api/cars/cars.routes');
const userRoutes = require('./api/users/users.routes');
const authRoutes = require('./api/auth/auth.routes');
const wishlistRoutes = require('./api/wishlist/wishlist.routes');

const app = express();

app.use(logRequests);
app.use(express.json());

app.use('/api/cars', carRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/wishlist', wishlistRoutes);

app.use(notFoundErrorHandler);
app.use(genericErrorHandler);

module.exports = app;
