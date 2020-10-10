const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:3000')

ws.on('open', function open() {
  console.log('already connect service')
  ws.send('Say hello from client')
  ws.on('message', function incoming (msg) {
    console.log('message close' + ws.readyState)
    console.log(msg)
  })
})

// service 断开或者client 主动 ws.close()断开也会触发这个事件
ws.on('close', function close() {
  console.log('close close' + ws.readyState)
  console.log('已经关闭了websocket')
})

// 连接失败
wx.on('error', function error () {
  console.log('error close' + ws.readyState)
  console.log('websocket 连接失败')
})