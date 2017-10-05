import KeyView from "./keyview.es6";
import Player from "./player.es6";
import Canvas from "./draw.es6";
import Multiplayer from "./multiplayer.es6";
const socket = io.connect('http://localhost:3000');
socket.on('messages', ()=> {
    c.loop();
});
let players = [];
class Controller {
    constructor() {
        this.mousePos = {
            x: 0,
            y: 0
        };
        this.Mp = new Multiplayer();
        this.canvas = new Canvas();
        this.player = new Player();
        this.key = new KeyView();

        window.addEventListener("mousemove", e => {
            this.mousePos.x = e.clientX;
            this.mousePos.y = e.clientY;
        });
        let data = {
            x: this.player.props.xPos,
            y: this.player.props.yPos,
            height:this.player.props.height,
            width:this.player.props.width,
            color : this.player.props.color
        };
       socket.emit('start', data);

    }

    loop() {
this.canvas.clearScreen();
        socket.on('heartbeat',
            function (data) {
                players = data;
            }
        );
        this.player.move(this.key.location);
        let data = {
            x: this.player.props.xPos,
            y: this.player.props.yPos,
            height: this.player.props.height,
            width: this.player.props.width,
            color : this.player.props.color
        };
        players.forEach(player=>{
            this.canvas.drawPlayer(player);
        });

        socket.emit('update', data);
        window.requestAnimationFrame(() => {
            this.loop();
        });
    }
}


const c = new Controller();