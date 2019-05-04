document.addEventListener('DOMContentLoaded', () => {
    app.start();
});

const app = {
    canvas: null,
    ctx: null,
    imgBackgraund: null,
    player: null,
    fps: 0,
    lastRegister: 0,
    backgroundPosition:0,
    start: function(){
        app.canvas = document.getElementById('canvas');
        app.canvas.style = "border: 2px solid black; display: flex; margin: auto";
        app.ctx = app.canvas.getContext('2d');
        app.imgBackgraund = document.createElement('img');
        app.imgBackgraund.src = 'img/images.jpeg';
        keyboard.start();
        obstacleIntelligence.start(app.canvas);

        app.player = new Player(app.canvas);
        
        
        app.loop();
    },
    update: function(TempRegister){
        // console.log(keyboard.keys);
        app.player.update();
        obstacleIntelligence.update(TempRegister);
        app.backgroundPosition++;
        if(app.backgroundPosition>canvas.height){
            app.backgroundPosition=0;
        }
    },
    draw: function(){
        app.ctx.clearRect(0, 0, app.canvas.width, app.canvas.height);
        app.ctx.drawImage(app.imgBackgraund, 0, app.backgroundPosition,canvas.width,canvas.height);  
        app.ctx.drawImage(app.imgBackgraund, 0, app.backgroundPosition-canvas.height,canvas.width,canvas.height);
        app.player.draw(app.ctx);
        obstacleIntelligence.draw(app.ctx);
        app.fps ++;
    },
    loop: function(TempRegister){
        requestAnimationFrame(app.loop);
        app.update(TempRegister);
        app.draw();

        if(TempRegister - app.lastRegister > 999){
            app.lastRegister = TempRegister;
            console.log("FPS: " + app.fps);
            app.fps = 0;
        }
    }
};