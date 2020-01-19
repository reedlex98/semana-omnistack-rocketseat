import socketio from 'socket.io-client'

const socket = socketio('http://127.0.0.1:3333', {
    autoConnect: false
})

function subscribeToNewDevs(subscribeFunction){
    socket.on('new-dev', subscribeFunction)
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude, techs
    }
    socket.connect()
}

function disconnect(params) {
    if(socket.connected){
        socket.disconnect()
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs
}