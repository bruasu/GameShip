class Meteorite extends Obstacles{
    constructor(canvas){
        super(canvas);       

        let random =Math.floor(Math.random()*3+1);

        switch(random){
            case 1:
                this.meteorite1();
                break;
            case 2:
                this.meteorite2();
                break;
            case 3:
                this.meteorite3();
                break;
        }
    }
    meteorite1(){
        this.width = 80;
        this.height = 80;
        this.img.src = 'img/meteorite1.png';
    }
    meteorite2(){
        this.width = 90;
        this.height = 95;
        this.img.src = 'img/meteorite2.png';
    }
    meteorite3(){
        this.width = 90;
        this.height = 95;
        this.img.src = 'img/meteorite3.png';
    }
}