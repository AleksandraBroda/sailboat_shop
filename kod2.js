const http = require('http');
const port = process.env.PORT || 8080;


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`<html><body style="background-color: black; color: yellow"><span style="font-size: large"><p style="text-align: center"><h1><u><b>This is HTML</b></u></h1></p></span></body></html>`);
}

const server = http.createServer(requestListener);
server.listen(port);
