const background = {
    backgroundPosition:0,
    imgBackgraund: null,
    canvas: null,
    start: (canvas) => {
        background.canvas = canvas;
        background.imgBackgraund = document.createElement('img');
        background.imgBackgraund.src = 'img/images.jpeg';
    },
    draw: (ctx) => {
        ctx.clearRect(0, 0, background.canvas.width, background.canvas.height);
        ctx.drawImage(background.imgBackgraund, 0, background.backgroundPosition,background.canvas.width,background.canvas.height);  
        ctx.drawImage(background.imgBackgraund, 0, background.backgroundPosition-background.canvas.height,background.canvas.width,background.canvas.height);
    },
    upgrade: () => {
        background.backgroundPosition++;
        if(background.backgroundPosition>background.canvas.height){
            background.backgroundPosition=0;
        }
    }
};