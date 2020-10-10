const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connect', function(socket) {
  console.log('a socket is connected')
  socket.on('chatEvent', function (msg) {
    console.log('msg from client:' + msg)
    //1: 单个指定的发送消息
    // socket.send('service says:' + msg)
    //2: 消息广播出去
      socket.broadcast.emit('ServerMsg', msg)
  })
})

http.listen(3000, function () {
  console.log('service is running on: 3000')
})

// http://localhost:3000/ 进行查看