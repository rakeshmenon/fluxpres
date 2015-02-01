var connect = require('connect');
var app = connect()
    .use(connect.static('presentation'));

require('http').createServer(app)
    .listen(7890)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:7890');
    });
