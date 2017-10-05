export default class Multiplayer{

    emit(socket, player){
        socket.emit('location', {
            x: player.x,
            y: player.y
        });
    }

    getLocation(socket){
        socket.on('locations', function(data) {

                return data;

        });}

    }
