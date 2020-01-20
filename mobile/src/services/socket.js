import socketio from 'socket.io-client'

const socket = socketio('http://192.168.0.102:3333', {
  autoConnect: false
})

function subscribeToNewDevs(subscribeFunction) {
  socket.on('new-dev', subscribeFunction)
}

function connect({ latitude, longitude, techs }) {
  socket.io.opts.query = { latitude, longitude, techs }

  socket.connect()

  socket.on('message', console.log)
}

function disconnect(){
  if (socket.connected)
    socket.disconnect()
}

export {
  connect,
  disconnect,
  subscribeToNewDevs,
}