const http = require('http');


http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end( "Hello jacky\n" );
}).listen(8080);