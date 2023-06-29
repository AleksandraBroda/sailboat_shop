const http = require('http');
const port = process.env.PORT || 8080;


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`<html><body style="background-color: yellow; color: black"><h1>This is HTML</h1></body></html>`);
}

const server = http.createServer(requestListener);
server.listen(port);
