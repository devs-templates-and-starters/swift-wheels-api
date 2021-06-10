const { createServer } = require('http');
const app = require('./src/app');

const port = parseInt(process.env.PORT, 10) || 8000;

createServer(app)
  .listen(port, () => {
    console.log(new Date(), `Server listening on port: ${port}`);
  })
  .on('listening', () => require('./src/config/db'));
