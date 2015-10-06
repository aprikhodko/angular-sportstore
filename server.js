var connect = require('connect');
connect.createServer(
    connect.static("../angularjs-sportstore")
).listen(2403);
