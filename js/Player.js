class Player{
    constructor(canvas){
        this.canvas = canvas;
        this.width = 30;
        this.height = 30;
        this.x = (canvas.width/2)-(this.width/2) ;
        this.y = ((canvas.height)-(canvas.height*0.10));
        this.speed = 8;
        this.moving = true;
    }
    draw(ctx){
        ctx.fillStyle = '#EE974E';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx = ctx;
    }
    update(){
        this.command();
    }
    command(){
        if(keyboard.pressKey(keysGame.left) && this.x > 1){
            this.x -= this.speed;
            if(this.x <= this.width){
                this.x = 0;
            }
        }
        else if(keyboard.pressKey(keysGame.right) && this.x < this.canvas.width - this.width){
            this.x += this.speed;
            if(this.x >= this.canvas.width - this.width){
                this.x = canvas.width - this.width;
            }
        }
    }
};