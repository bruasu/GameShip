const init = {
    canvas: null,
    ctx: null,
    player: null,    
    fps: 0,
    lastRegister: 0,
    start: () => {
        init.canvas = document.getElementById('canvas');
        init.canvas.style = "border: 2px solid black; display: flex; margin: auto";
        init.ctx = init.canvas.getContext('2d');
        
        background.start(init.canvas);
        keyboard.start();
        obstacleIntelligence.start(init.canvas);

        init.player = new Player(init.canvas);

        init.loop();
    },
    draw: () => {
        background.draw(init.ctx);
        init.player.draw(init.ctx);
        obstacleIntelligence.draw(init.ctx);
        init.fps ++;
    },
    update: (TempRegister) => {
        init.player.update(obstacleIntelligence.objects);
        obstacleIntelligence.update(TempRegister);
        background.upgrade();
    },
    loop: function(TempRegister){
        requestAnimationFrame(init.loop);
        init.update(TempRegister);
        init.draw();

        if(TempRegister - init.lastRegister > 999){
            init.lastRegister = TempRegister;
            console.log("FPS: " + init.fps);
            init.fps = 0;
        }
    }
};