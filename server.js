const http = require('http'),
	express = require('express'),
    app = express(),
    httpServer = http.createServer(app),
    port = 80;

//Point to static asset directory
app.use(express.static('public'));

//Start server
httpServer.listen(port, function(){
	console.log('Server listening on port ' + port);
});
