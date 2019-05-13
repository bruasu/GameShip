class powerCardsBoard{
    constructor(){
        this.cards = [
            new powerCard(0),
            new powerCard(1),
            new powerCard(2),
            new powerCard(3),
        ];
        this.cards[0].setPos(0,0);
        this.cards[1].setPos(100,0);
        this.cards[2].setPos(200,0);
        this.cards[3].setPos(300,0);
        this.isLoading = false;
        this.loadingTick = 0;
        this.timeToLoading = 30;
    }
    draw(ctx){
        ctx.fillStyle = 'rgb(50,50,50)';
        ctx.fillRect(0,0,800,100);
        for(let i = 0;i<this.cards.length;i++){
            this.cards[i].draw(ctx);
            if(this.isLoading){
                ctx.fillStyle = 'rgba(50,50,50,0.5)';
                let a = this.loadingTick*(100/this.timeToLoading);
                ctx.fillRect(this.cards[i].x,this.cards[i].y+a,this.cards[i].width, this.cards[i].height-(a));
            }
        }
    }
    update(){
        for(let i = 0;i<this.cards.length;i++){
            this.cards[i].update();
        }
        if(this.isLoading){
            if(this.loadingTick<this.timeToLoading){
                this.loadingTick++;
            }else{
                this.loadingTick=0;
                this.isLoading=false;
            }
        }
        if(keyboard.pressKey(keysGame.one)){
            if(!this.isLoading){
                stateMachine.stateExisting.player.shoot(0,'blue');
            }
            this.isLoading=true;
        }
        if(keyboard.pressKey(keysGame.two)){
            if(!this.isLoading){
                stateMachine.stateExisting.player.shoot(0,'red');
            }
            this.isLoading=true;
        }
        if(keyboard.pressKey(keysGame.three)){
            if(!this.isLoading){
                stateMachine.stateExisting.player.shoot(0,'yellow');
            }
            this.isLoading=true;
        }
        if(keyboard.pressKey(keysGame.four)){
            if(!this.isLoading){
                stateMachine.stateExisting.player.shoot(0,'green');
            }
            this.isLoading=true;
        }
    }
}