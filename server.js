const http = require('http'),
	express = require('express'),
    app = express(),
    httpServer = http.createServer(app),
    port = 80;

//Point to static asset directory
app.use(express.static('public'));

//register API routes
app.use('/api', require('./routes/api.js'));

//Start server
httpServer.listen(port, function(){
	console.log('Server listening on port ' + port);
});

module.exports = app;