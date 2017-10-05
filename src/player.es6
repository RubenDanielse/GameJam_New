import Keyview from "./keyview.es6"

class Player {
    constructor() {
        this.props = {
            xPos: 10,
            yPos: 10,
            height: 20,
            width: 20,
            hp: 3,
            color: this.randomColor(),
        };
        this.key = new Keyview;
    }


    move(movement) {
        if (movement.left && this.props.xPos <= window.innerWidth - window.innerWidth) {
            this.props.xPos === 0;
        } else if (movement.left) {
            this.props.xPos -= 10;
        }

        if(movement.right && this.props.xPos >= window.innerWidth - 10) {
            this.props.xPos === window.innerWidth;
        } else if (movement.right ===true ) {
            this.props.xPos += 10;
        }

        if(movement.down && this.props.yPos >= window.innerHeight - 10) {
            this.props.yPos === window.innerHeight;
        } else if(movement.down){
            this.props.yPos += 10;
        }

        if(movement.up && this.props.yPos <= window.innerHeight - window.innerHeight) {
            this.props.yPos === 0;
        } else if(movement.up) {
            this.props.yPos -= 10;
        }
        // this.collision();
    }


    collision(particle){
        console.log(particle);
        if (!particle) return;

        if ((particle.x + particle.size >= this.props.xPos)
            && (particle.x <= this.props.xPos + this.props.width)
            && (particle.y + particle.size >= this.props.yPos)
            && (particle.y <= this.props.yPos + this.props.height)
        ) {
            console.log("hi");
            this.props.hp = this.props.hp - 1;
            this.props.color = "rgba(200,0,0,1)";
            setTimeout(()=>{ this.props.color = "rgba(0,127,127,1)";}, 100);
            return true;
        }
        return false;
    }

    randomColor() {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
    checkHp() {
        return this.props.hp;

    }
    get pLocation (){
        return{
            x:this.props.xPos+"",
            y:this.props.yPos+"",
            height:this.props.height,
            width:this.props.width
        }
    }
}

module.exports = Player;