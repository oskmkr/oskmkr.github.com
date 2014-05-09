var http = require('http');
var fs = require('fs');

var port = 8080;
console.log('start simple web server...', port);

http.createServer(function (req, res) {
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	var index = fs.readFileSync('oskmBlogApp.html');
	res.end(index);

}).listen(port);
