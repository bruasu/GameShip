class GameStart{
    constructor(canvas){
        //variable the Gradient
        this.movement = 0;
        this.canvas = canvas;
        this.addressGradient = 'botton';

        this.buttonStart();
    }
    update(TempRegister){
        this.movementGradient();
    }
    draw(ctx){
        let gradient = ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        gradient.addColorStop(this.movement, 'gray');
        gradient.addColorStop(1, 'white');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    movementGradient(){
        if(this.addressGradient == 'botton'){
            this.movement += 0.005;
        }
        else if(this.addressGradient == 'top'){
            this.movement -= 0.005;
        }

        if(this.movement >= 1){
            this.movement = 1;
            this.addressGradient = 'top';
        }
        else if(this.movement <= 0){
            this.movement = 0;
            this.addressGradient = 'botton';
        }
        
    }
    buttonStart(){
        let centerBodyWidth = document.body.clientWidth / 2;
        let centerBodyHeight = document.body.clientHeight / 2;
        let button = document.createElement('button');

        button.innerText = 'Start';
        button.style.position = "relative";

        
        let div = document.getElementById('buttonStart');
        div.appendChild(button);
        
        let centerBodyAndButton = centerBodyWidth - (button.offsetWidth/2);     
        button.style.left = centerBodyAndButton+"px";
        button.style.top = '-'+centerBodyHeight+'px';
        

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
};