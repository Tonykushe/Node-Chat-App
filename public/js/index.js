 let socket = io();

 socket.on('connect', () => {
     console.log('Connected to Server');

     socket.emit('createMessage', {
         from: 'sandra@gmail.com',
         text: 'Wassup Tony'
     });
 });

 socket.on('disconnect', () => {
     console.log('Disconnected from server');
 });

 socket.on('newEmail', (email) => {
     console.log('New Email', email);
     
 });

 socket.on('newMessage', (message) => {
    console.log('New Message', message);
 });



 