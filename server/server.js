const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected!');

    socket.emit('newMessage', {
        from: 'mugendi.tony26@gmail.com',
        text: 'Hello Everyone',
        createdAt: 123456
    });

    socket.on('createMessage', (message) => {
        console.log('New Message', message);
    })

    socket.on('disconnect', () => {
        console.log('User Disconnected!');
    });
})



server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
})
