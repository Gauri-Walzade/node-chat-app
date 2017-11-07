var socket = io();

socket.on('connect', function ()  {
  console.log('Connected to server');

  socket.emit('createMessage',{
    to: 'ekta',
    text:'wer are u'
  });

});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage' ,function (mesaage) {
  console.log('NEw Message ' , mesaage);
});
