document.addEventListener('DOMContentLoaded', () => {
    app.start();
});

const app = {
    start: function(){ 
        canvas.start();
        loop.start();
    },
    update: function(){
        loop.update();
    },
    draw: function(){
        loop.draw();
    }
};