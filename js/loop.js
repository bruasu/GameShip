const loop = {
    canvas: null,
    ctx: null,   
    fps: 0,
    lastRegister: 0,
    start: () => {
        loop.canvas = canvas.canvas;
        loop.ctx = canvas.ctx;

        keyboard.start();
        stateMachine.start();
        loop.loop();
    },
    draw: () => {
        stateMachine.draw(loop.ctx);
        loop.fps ++;
    },
    update: (TempRegister) => {
        stateMachine.update(TempRegister);
    },
    loop: function(TempRegister){
        requestAnimationFrame(loop.loop);
        loop.update(TempRegister);
        loop.draw();

        if(TempRegister - loop.lastRegister > 999){
            loop.lastRegister = TempRegister;
            console.log("FPS: " + loop.fps);
            loop.fps = 0;
        }
    }
};