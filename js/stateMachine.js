const stateMachine = {
    stateExisting: null,
    start: () => {
        stateMachine.upgradeState(listStates.START_MENU);
    },
    upgradeState(newState){        
        switch(newState){
            case listStates.LOADING:
            break;
            case listStates.START_MENU:
                stateMachine.stateExisting = new GameStart(canvas.canvas);
            break;
            case listStates.START_GAME:
                stateMachine.stateExisting = new InitGame(canvas.canvas);
            break;
            case listStates.GAME_OVER:
                stateMachine.stateExisting = new GameOver(canvas.canvas);
            break;
        }
    },
    update: (TempRegister) => {
        stateMachine.stateExisting.update(TempRegister);
    },
    draw: (ctx) => {
        stateMachine.stateExisting.draw(ctx);
    }
};