const socketio = require('socket.io')
const parseStringAsArray = require('./utils/parseStringAsArray')
const calculateDistance = require('./utils/calculateDistance')

let io;
const connections = []

exports.setupWebsocket = (server) => {
  io = socketio(server)

  io.on('connection', socket => {
    const { latitude, longitude, techs } = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: parseStringAsArray(techs),
    })
  })
}

exports.findConnections = (coordinates, techs) => {
  return connections.filter(connection => { 
    return calculateDistance(coordinates, connection.coordinates) < 10 //10km
      && connection.techs.some(item => techs.includes(item))
  })
}

// Exemple of to
// [
//   {
//     id: 'WR2qBMPmC9jKaKU_AAAA',
//     coordinates: { latitude: -20.42925087049043, longitude: -54.578255731612444 },
//     techs: [ 'Node.js' ]
//   },
//   {
//     id: 'xhNlanox8wYlgrSRAAAB',
//     coordinates: { latitude: -20.431115044003583, longitude: -54.57948284223676 },
//     techs: [ 'Node.js' ]
//   }
// ]
exports.sendMessage = (to, message, data) => {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data)
  })
}