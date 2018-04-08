var http = require('http');

function start() {
  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Hello World!');
    response.end();
  }
  console.log("Server has started.");
  
  http.createServer(onRequest).listen(process.env.Port);
}

exports.start = start;