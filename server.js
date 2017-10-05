const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname +'/client'));

let allClients =[];
//Store all HTML files in view folder.

app.get('/',function(req,res){
    res.sendFile('/index.html');
    //It will find and locate index.html from View or Scripts
});

let players = [];

function Player(id, x, y, height,width,color) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
}

    setInterval(heartbeat, 33);

function heartbeat() {

    io.sockets.emit('heartbeat', players);
}



io.sockets.on('connection',
    // We are given a websocket object in our function
    function(socket) {
        allClients.push(socket.id);
        setInterval(heartbeat, 33);
        socket.emit("messages");
        console.log("We have a new client: " + socket.id);


        socket.on('start',
            function (data) {
                let player = new Player(socket.id, data.x, data.y, data.height, data.width, data.color);
                players.push(player);
            }
        );

        socket.on('update',
            function (data) {
                if(allClients.includes(socket.id) ){
                console.log(socket.id + " " + data.x + " " + data.y + " " + data.height+ " "+data.width);
                let player;

                for (let i = 0; i < players.length; i++) {
                    if (socket.id === players[i].id) {
                        player = players[i];
                    }
                }
                player.x = data.x;
                player.y = data.y;
                player.height = data.height;
                player.width = data.width;
                player.color = data.color;
            }
            }
            );
        socket.on('disconnect', function() {

            players = players.filter(function( obj ) {
                return obj.id !== socket.id;
            });
        });

    });








console.log("Server listening on 3000");
server.listen(3000);