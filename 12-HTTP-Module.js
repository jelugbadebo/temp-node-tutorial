// HTTP module

const http = require('http');

// Create server method

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page');
  }
  if (req.url === '/about') {
    res.end('Here is our short history');
  }
});

// Establish port server is listening for requests on

server.listen(5000);
