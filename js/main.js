document.addEventListener('DOMContentLoaded', () => {
    app.start();
});

const app = {
    start: function(){             
        init.start();
    },
    update: function(){
        init.update();
    },
    draw: function(){
        init.draw();
    }
};