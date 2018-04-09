var http = require('http');
var url  = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var postData = '';
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }
  
  console.log("Server has started.");
  http.createServer(onRequest).listen(process.env.PORT);
}

exports.start = start;