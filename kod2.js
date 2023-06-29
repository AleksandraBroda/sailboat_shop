const http = require('http');
const port = process.env.PORT || 8080;


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`<html><center><body style="background-color: black; color: yellow"><span style="font-size: xx-large; font-family: Curlz MT"><h1><u><b>👋 Hello! This is HTML</b></u></h1></span></body></center></html>`);
}

const server = http.createServer(requestListener);
server.listen(port);
