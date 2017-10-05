class KeyView {
    constructor() {
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.id = 100;
        this.name = "Test";
        this.score = Math.random()*10;
        document.addEventListener("keydown", (keyBoardDown) => {
            if (keyBoardDown.keyCode === 39) {
                this.right = true;

            }
            if (keyBoardDown.keyCode === 37) {
                this.left = true;
            }
            if (keyBoardDown.keyCode === 38) {
                this.up = true;
            }
            if (keyBoardDown.keyCode === 40) {
                this.down = true;
            }


        });

        document.addEventListener("keyup", (keyBoardUp) => {

            if(keyBoardUp.keyCode === 39) {
                this.right = false;

            }
            if(keyBoardUp.keyCode === 37) {
                this.left = false;
            }
            if(keyBoardUp.keyCode === 38) {
                this.up = false;
            }
            if(keyBoardUp.keyCode === 40) {
                this.down = false;
            }
        });
    }

    get location (){
        return {
            left: this.left,
            right: this.right,
            up: this.up,
            down: this.down
        };
    }
}

module.exports = KeyView;
