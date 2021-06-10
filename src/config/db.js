const mongoose = require('mongoose');
const logger = require('../utils/logger');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
};

mongoose.connection.on('connected', () => {
  logger.info('Connected to DB');
});

mongoose.connection.on('error', (err) => {
  logger.error(`An error occured while connecting to DB`, err);
});

try {
  mongoose.connect(process.env.MONGO_URI, options);
  logger.info('Connecting....');
} catch (e) {
  console.log(`Error:`, e);
}
