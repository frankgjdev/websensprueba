const http = require('http');
const os = require('os');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello world ${address.address}");

});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});