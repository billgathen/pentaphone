var app  = require('express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);
var path = require('path');
var assetDir = path.join(__dirname, '../dist');

var midiport      = 0;
var pentaphone    = require('./pentaphone');
var midiConnector = require('midi-launchpad').connect(midiport, false);

midiConnector.on('ready', function(launchpad) {
  pentaphone.build(launchpad);

  io.on('connection', function(socket) {
    socket.on('keydown', function(name) {
      pentaphone.keydown(launchpad, name);
    });

    socket.on('keyup', function(name) {
      pentaphone.keyup(launchpad, name);
    });

    pentaphone.echoActions(launchpad, socket);
  });
});

app.get('/', function(req, res) {
  res.sendFile(path.join(assetDir, 'index.html'));
});

app.get('/:dir/:filename', function(req, res) {
  res.sendFile(path.join(assetDir, req.params.dir, req.params.filename));
});

app.get('/:filename', function(req, res) {
  res.sendFile(path.join(assetDir, req.params.filename));
});

http.listen(3000, function() {
  console.log('Listening on http://localhost:3000');
});
