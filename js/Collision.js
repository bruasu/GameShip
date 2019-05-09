class Collision{
    constructor(name){
        this.x;
        this.y;
        this.width;
        this.height;
        this.name = name;
    }
    draw(ctx){
        ctx.fillStyle = "#fff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}