class GameOver{
    constructor(canvas){
        this.canvas = canvas;
        this.buttonReconnect();
    }
    update(TempRegister){

    }
    draw(ctx){
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.fillStyle = "white";
        ctx.font = "60px sans-serif";
        let text = "Game Over";
        let sizeText = ctx.measureText(text).width;
        
        ctx.fillText(text, (this.canvas.width/2) - (sizeText/2), this.canvas.height/2);
    }
    buttonReconnect(){
        let centerBody = document.body.clientWidth / 2;
        let button = document.createElement('button');

        button.innerText = 'Reconnect';
        button.style.position = "relative";

        
        let div = document.getElementById('buttonReconnect');
        div.appendChild(button);
        
        let centerBodyAndButton = centerBody - (button.offsetWidth/2);     
        button.style.left = centerBodyAndButton+"px";
        button.style.top = '-100px';
        

        window.addEventListener('resize', (e) => {
            let centerBody = document.body.clientWidth / 2;
            let centerBodyAndButton = centerBody - button.offsetWidth/2;     
            button.style.left = centerBodyAndButton+"px";
        });

        button.addEventListener('click', (e) => {
            div.innerHTML = '';
            stateMachine.upgradeState(listStates.START_GAME);
            
        });
    }
}