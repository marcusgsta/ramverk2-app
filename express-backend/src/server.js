const app = require('./index');
const { chatServer } = require('./chat/chat-server.js');

// get env variable DBWEBB_PORT
var PORT;

if (typeof process.env.DBWEBB_PORT !== 'undefined') {
    PORT = process.env.DBWEBB_PORT;
} else {
    PORT = 1339;
}

// Start up server
var server;

server = app.listen(process.env.PORT || PORT, () => {
// app.listen(PORT, () => {
    console.log("Express is listening on port " + PORT);
});

chatServer(server);
