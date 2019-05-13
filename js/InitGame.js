class InitGame{
    constructor(canvas){

        this.canvas = canvas;
        background.start(this.canvas);
        obstacleIntelligence.start(this.canvas);
        this.player = new Player(this.canvas);
        this.powerCardsBoard = new powerCardsBoard();
    }
    draw(ctx){
        background.draw(ctx);
        this.player.draw(ctx);
        obstacleIntelligence.draw(ctx);
        this.powerCardsBoard.draw(ctx);
    }
    update(TempRegister){
        this.player.update(obstacleIntelligence.objects);
        obstacleIntelligence.update(TempRegister);
        background.upgrade();
        this.powerCardsBoard.update();
    }
};