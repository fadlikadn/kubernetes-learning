// var http = require('http');

// var handleRequest = function(request, response) {
//     console.log('Received request for URL: ' + request.url);
//     response.writeHead(200);
//     response.end('Hello World!');
// };
// var www = http.createServer(handleRequest);
// www.listen(8080);

const http = require('http');

const hostname = '127.0.0.1';
const port = 8082;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});