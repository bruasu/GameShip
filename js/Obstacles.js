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

        this.displayPositionX();
    }
    update(){
        this.IA();
    }
    draw(ctx){
        this.ctx = ctx;
        ctx.fillStyle = "#A56128";
        ctx.save();
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
        ctx.restore();

        ctx.fillStyle = "#fff";
        ctx.fillRect(this.x,this.y + this.height,this.width,10);
        
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
}