class Bullet{
    constructor(x,y,type,color){
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.type = type;
        this.animationTicks = 1;
        this.speed = 6;
        this.collision = new Collision();
        this.collision.x=x;
        this.collision.y=y;
        this.collision.width=this.width;
        this.collision.height=this.height;
        switch(type){
            case bulletsType.simple_bullet:
                switch(color){
                    case bulletsTypeColors.red:
                    this.imgsPos = bulletsTypesImgs.simple_bullet_red;
                        break
                        case bulletsTypeColors.blue:
                    this.imgsPos = bulletsTypesImgs.simple_bullet_blue;
                        break
                        case bulletsTypeColors.yellow:
                    this.imgsPos = bulletsTypesImgs.simple_bullet_yellow;
                        break
                    case bulletsTypeColors.green:
                        this.imgsPos = bulletsTypesImgs.simple_bullet_green;
                        break
                }
                break
            case bulletsType.rounded_bullet:
                switch(color){
                    case bulletsTypeColors.red:
                    this.imgsPos = bulletsTypesImgs.rounded_bullet_red;
                        break
                        case bulletsTypeColors.blue:
                    this.imgsPos = bulletsTypesImgs.rounded_bullet_blue;
                        break
                        case bulletsTypeColors.yellow:
                    this.imgsPos = bulletsTypesImgs.rounded_bullet_yellow;
                        break
                    case bulletsTypeColors.green:
                    this.imgsPos = bulletsTypesImgs.rounded_bullet_green;
                        break
                }
                break
        }
        this.animationFrame = this.imgsPos.length-2;
        this.img = document.createElement('img');
        this.img.src = 'img/BulletCollection.png';
    }
    draw(ctx){
        for(var i = 1;i<this.imgsPos.length-this.animationFrame;i++){
            let bitmap_x = this.imgsPos[i][0];
            let bitmap_y = this.imgsPos[i][1];
            let bitmap_width = this.imgsPos[0][0];
            let bitmap_height = this.imgsPos[0][1];
            if(i>5){
                bitmap_width-=i-5;
            }
            ctx.save();
            ctx.translate(this.x,this.y+i*(this.height*1.3));
            ctx.rotate(Math.PI*1.5);
            ctx.drawImage(this.img,bitmap_x,bitmap_y,bitmap_width,bitmap_height,-this.width/2,-this.height/2,this.width,this.height);
            ctx.restore();
        }
    }
    update(){
        if(this.animationFrame>0){
            this.animationTicks++;
            if((this.animationTicks)%15==0){
                this.animationFrame--;
            }
        }
        this.y-=this.speed;
        this.collision.y=this.y;
    }
}