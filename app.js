const http = require('http');

const server = http.createServer((req, res) => {
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(`testing node working in docker...`);
  res.end();
});

server.listen(8100, () => {
  console.log('Server started!');
});
