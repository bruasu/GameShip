class Obstacles{
    constructor(canvas){
        this.canvas = canvas;
        this.width = canvas.width/4;
        this.height = 30;
        this.speed = 1;
        this.x = 0;
        this.y = 0;
        this.moving = true;

        this.displayPositionX();
        this.widthObstacles();
        this.speedVar();
    }
    update(){
        this.IA();
    }
    draw(ctx){
        this.ctx = ctx;
        ctx.fillStyle = "#A56128";
        ctx.fillRect(this.x, this.y, this.width, this.height);
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