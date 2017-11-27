// socket.io
var socket = require('socket.io');

const chatServer = (server) => {
    chatServer.io = socket(server);

    chatServer.io.on('connection', (socket) => {
        console.log(socket.id);
        socket.on('SEND_MESSAGE', function(data) {
            chatServer.io.emit('RECEIVE_MESSAGE', data);
        });

        socket.on('TYPING', function(data) {
            socket.broadcast.emit('TYPING', data);
        });
    });
};

module.exports = { chatServer };
