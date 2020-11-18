const express = require('express')
const app = express();
const http = require('http')
const server = http.createServer(app)
const socketio = require('socket.io')
const io = socketio(server)
const port = 8000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

io.on('connection', (socket) => {
    console.log('chatMessage', msg => {
        console.log(msg)
    });
  });

server.listen(port, () => {

  console.log("Example app listening on port ${port}!")
});

app.use("/js", express.static("./public/js/"))