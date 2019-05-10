class Obstacles{
    constructor(canvas){
        this.canvas = canvas;
        this.width = 60;
        this.height = 60;
        this.speed = 3;
        this.x = 0;
        this.y = 0;
        this.moving = true;

        this.img = document.createElement('img');
        this.img.src = 'img/spaceship1.png';

        this.collision = new Array();
        this.collision.push(new Collision('front'));

        this.displayPositionX();
    }
    update(){
        this.collisionArea();
        this.IA();
    }
    draw(ctx){
        this.ctx = ctx;
        ctx.fillStyle = "#A56128";
        ctx.save();
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
        ctx.restore();
        
        for(let i = 0; i < this.collision.length; i++){
            this.collision[i].draw(ctx);
        }
    }    
    IA(){
        this.y += this.speed;
    }
    getY(){
        return this.y;
    }
    displayPositionX(){
        let ramdom = Math.random();
        ramdom = (this.canvas.width - this.width) * ramdom;
        this.x = ramdom;        
    }
    collisionArea(){
        for(let i = 0; i < this.collision.length; i++){
            if(this.collision[i].name == 'front'){
                this.collision[i].update(this.x, this.y + this.height - 10, this.width, 10);
            }
        }
    }
}