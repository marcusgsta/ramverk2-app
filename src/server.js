const app = require('./index');
const { chatServer } = require('./chat/chat-server.js');

var PORT;

PORT = process.env.PORT || process.env.DBWEBB_PORT || 1337;


// Start up server
var server;

server = app.listen(process.env.PORT || PORT, () => {
// app.listen(PORT, () => {
    console.log("Express is listening on port " + PORT);
});

chatServer(server);
