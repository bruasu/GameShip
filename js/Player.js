class Player{
    constructor(canvas){
        this.canvas = canvas;
        this.width = 60;
        this.height = 60;
        this.fit = 35; //adjustment
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
        if(this.direction==0){
            ctx.drawImage(this.img,5,200,this.width-4,this.height,this.x-this.fit,this.y-this.fit,100,100);
        }
        if(this.direction>0){
            ctx.drawImage(this.img,195,0,this.width,this.height,this.x-this.fit,this.y-this.fit,100,100);
        }
        if(this.direction<0){
            ctx.drawImage(this.img,65,200,this.width+2 ,this.height,this.x-this.fit,this.y-this.fit,100,100);
        }
        //
        //
        //
        this.ctx = ctx;
    }
    update(objects){
        this.command();
        this.collisionMeteorite(objects);
    }
    command(){
        //collesion maps
        if(keyboard.pressKey(keysGame.left) && this.x > 1){
            this.x -= this.speed;
            if(this.x <= this.width){
                this.x = 0 + this.fit;
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
    collisionMeteorite(objects){

        if(objects.length>0){

            for(let i = 0 ; i < objects.length; i++){
                let obj = objects[i];
                
                
                if(this.x < obj.x + obj.width &&
                    this.y + this.width > obj.x &&
                    this.y < obj.y + obj.height &&
                    this.height + this.y > obj.y
                    ){
                        console.log('collision');
                }
            }

        }
    }
};