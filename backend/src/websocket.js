const socketio = require('socket.io')
const parseStringAsArray = require('./utils/parseStringAsArray')
const calculateDistance = require('./utils/calculateDistance')

const connections = []

exports.setupWebsocket = (server) => {
  const io = socketio(server)

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