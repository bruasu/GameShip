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
        this.collision = new Array();
        this.collision.push(new Collision('top'));
        this.bullets = new Array();
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

        for(let i = 0; i < this.collision.length; i++){
           // this.collision[i].draw(ctx);
        }
        for(let i = 0; i < this.bullets.length; i++){
            this.bullets[i].draw(ctx);
        }
        this.ctx = ctx;
    }
    update(objects){
        this.command();
        this.collisionArea();
        this.collisionMeteorite(objects);
        for(let i = 0; i < this.bullets.length; i++){
            this.bullets[i].update();
            if(this.bullets[i].y<0){
                this.bullets.splice(i,1);
            }
        }
        this.bulletCollisionMeteorite(objects);
    }
    shoot(type,color){
        this.bullets.push(new Bullet(this.x-25,this.y-20,type,color));
        this.bullets.push(new Bullet(this.x+55,this.y-20,type,color));
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
        //add bullets
        if(keyboard.pressKey(keysGame.space)){
            
        }
    }

    collisionMeteorite(objects){

        if(objects.length>0){

            for(let i = 0 ; i < objects.length; i++){
                let obj = objects[i];
                
              for(let x = 0; x < this.collision.length; x++){

                  if(this.collision[x].y < obj.collision[x].y + obj.collision[x].height &&
                    this.collision[x].x < obj.collision[x].x + obj.collision[x].width &&
                    this.collision[x].x + this.collision[x].width > obj.collision[x].x &&
                    this.collision[x].y > obj.collision[x].y
                    ){
                        
                        stateMachine.upgradeState(listStates.GAME_OVER);
                    }
                }
            }  

        }
    }
    bulletCollisionMeteorite(objects){
        for(let h = 0 ; h < objects.length; h++){
            let obj = objects[h];
            for(let i = 0; i < this.bullets.length; i++){
                if((this.bullets[i].x>obj.x)&&(this.bullets[i].x<obj.x+obj.width)){
                    if(this.bullets[i].y<obj.y+obj.height&&this.bullets[i].y+this.bullets[i].height>obj.y){
                        this.bullets.splice(i,1);
                    }
                }
            }
        }
    }
    collisionArea(){
        for(let i = 0; i < this.collision.length; i++){

            if(this.collision[i].name == 'top'){
                let y = this.y - this.height/2;
                let x = this.x - this.width/2;
                let width = this.width + this.fit;
                let height = this.height;

                this.collision[i].update(x, y, width - 5, 20);
            }
        }
    }   
};