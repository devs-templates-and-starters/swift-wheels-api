const { createServer } = require('http');
const app = require('./src/app');
const logger = require('./src/utils/logger');

const port = parseInt(process.env.PORT, 10) || 8000;

createServer(app)
  .listen(port, () => {
    logger.info(`Server listening on port:`, port);
  })
  .on('listening', () => require('./src/config/db'));
