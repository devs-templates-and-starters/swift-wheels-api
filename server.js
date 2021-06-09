const { createServer } = require('http');

const port = parseInt(process.env.PORT, 10) || 8000;

createServer((req, res) => {
  res.end('THis is a test');
}).listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
