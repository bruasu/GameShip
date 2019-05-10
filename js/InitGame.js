class InitGame{
    constructor(canvas){

        this.canvas = canvas;
        background.start(this.canvas);
        obstacleIntelligence.start(this.canvas);
    
        this.player = new Player(this.canvas);
    }
    draw(ctx){
        background.draw(ctx);
        this.player.draw(ctx);
        obstacleIntelligence.draw(ctx);
    }
    update(TempRegister){
        this.player.update(obstacleIntelligence.objects);
        obstacleIntelligence.update(TempRegister);
        background.upgrade();
    }
};