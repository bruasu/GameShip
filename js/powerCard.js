class powerCard{
    constructor(id){
        this.img = document.createElement('img');
        this.img.src = 'img/cards.png';
        this.x=0;
        this.y=0;
        this.width=100;
        this.height=100;
        this.id=id;
    }
    setPos(x,y){
        this.x=x;
        this.y=y;
    }
    draw(ctx){
        ctx.drawImage(this.img,this.id*150,0,150,150,this.x,this.y,this.width,this.height);
    }
    update(){

    }
}