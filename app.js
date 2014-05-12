var http = require('http');
var fs = require('fs');

var port = 8081;
console.log('start simple web server...', port);

http.createServer(function (req, res) {
	console.dir(req);
	console.dir('request url', req.url);

	res.writeHead(200, {'Content-Type': 'text/html'});
	var index = fs.readFileSync('.' + req.url);
	res.end(index);

}).listen(port);

// git config --global http.sslVerify false