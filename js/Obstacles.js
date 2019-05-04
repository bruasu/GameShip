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
        let num = Math.ceil(Math.random()*3+1);
        console.log(num);
        this.img.src = 'img/spaceship'+num+'.png';
        this.displayPositionX();
        //this.widthObstacles();
        this.direction = Math.PI/2;
        //this.speedVar();
    }
    update(){
        this.IA();
    }
    draw(ctx){
        this.ctx = ctx;
        ctx.fillStyle = "#A56128";
        ctx.save();
        //ctx.beginPath();
        ctx.rotate(0.3);
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
        //ctx.closePath();
        ctx.restore();
        
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
    widthObstacles(){
        let ramdom = Math.random();
        ramdom *= canvas.width / 2;
        if(ramdom > canvas.width / 4){
            this.width = ramdom;
        } 
    }
    speedVar(){
        let ramdom = Math.random();
        ramdom *= 4;
        if(ramdom >= 1){
            this.speed = ramdom;
        }
    }
}