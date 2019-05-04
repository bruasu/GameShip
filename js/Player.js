class Player{
    constructor(canvas){
        this.canvas = canvas;
        this.width = 30;
        this.height = 30;
        this.x = (canvas.width/2)-(this.width/2) ;
        this.y = ((canvas.height)-(canvas.height*0.10));
        this.speed = 8;
        this.moving = true;
        this.img = document.createElement('img');
        this.img.src = 'img/spaceship.png';
        this.direction = 0;
    }
    draw(ctx){
        ctx.fillStyle = '#EE974E';
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        let adj = 35;
        if(this.direction==0){
            ctx.drawImage(this.img,0,200,60,60,this.x-adj,this.y-adj,100,100);
        }
        if(this.direction>0){
            ctx.drawImage(this.img,190,0,60,60,this.x-adj,this.y-adj,100,100);
        }
        if(this.direction<0){
            ctx.drawImage(this.img,60,200,70,60,this.x-adj,this.y-adj,100,100);
        }
        //
        //
        //
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
            this.direction=-1;
        }
        else if(keyboard.pressKey(keysGame.right) && this.x < this.canvas.width - this.width){
            this.x += this.speed;
            if(this.x >= this.canvas.width - this.width){
                this.x = canvas.width - this.width;
            }
            this.direction=1;
        }else{
            this.direction=0;
        }
    }
};