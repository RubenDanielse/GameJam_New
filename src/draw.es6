export default class Canvas{
    constructor() {
        this.screenSize = {
            x: window.innerWidth,
            y:window.innerHeight
        };
        this.canvas = document.querySelector("#myCanvas");
        this.context = this.canvas.getContext("2d");
        this.font ="30px Arial";
        this.canvas.width =this.screenSize.x *0.8;
        this.canvas.height = this.screenSize.y *0.8;
    }


    clearScreen(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);

    }

    drawPlayer(data) {

            this.context.fillStyle = data.color;
            this.context.fillRect(
                data.x,
                data.y,
                data.height,
                data.width
            );


    }
    showHp(hp){
        this.context.fillStyle ="red";
        this.context.fillText("Lives : " + hp , 100 ,100);
    }
    get size (){
        return {
            width: this.canvas.width,
            height: this.canvas.height
        };
    }

}