const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3000 })

wss.on('connection', function connection(ws) {
  console.log('a client is connected')
  ws.on('message', function incoming(message) {
    console.log('received: %s', message)
  })
 
  ws.send('Say hello from service')
});