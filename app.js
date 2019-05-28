/* importar as configuracoes do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(60, function(){
    console.log('Servidor Online');
});

var io = require('socket.io').listen(server);

/* Criar a conexão por websocket */ 
io.on('connection', function(socket){
    console.log('Usuário conectou');


    socket.on('disconnect', function(){
        console.log('Usuário desconectou');

    })
});

