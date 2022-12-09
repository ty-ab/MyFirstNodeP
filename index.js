const express = require("express");
const { n } = require("./custom_module/cmodule");
const { createServer } = require("http");
const { Server } = require("socket.io");

const tapp = express();
const server = createServer(tapp);
const port = 3000;
const io = new Server(server);

//tapp.use(express.static(__dirname + "public"));

tapp.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
tapp.get("/io", (req, res) => {
  res.sendFile(__dirname + "/public/socket.io.js");
});
io.on("connection", function (socket) {
  console.log("a user connectes")
  socket.on('disconnect', () => {
    console.log('user disconnected');
  })

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  })

});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  })

server.listen(port, function () {
  console.log(`Listening on port: ${port}`);
});
