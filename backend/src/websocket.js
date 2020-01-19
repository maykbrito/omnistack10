const socketio = require('socket.io')

exports.setupWebsocket = (server) => {
  const io = socketio(server)

  io.on('connection', socket => {
    setTimeout(() => {
      socket.emit('message', 'Sending message from backend')
    }, 3000)
  })
}
