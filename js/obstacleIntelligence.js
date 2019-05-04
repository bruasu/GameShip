const obstacleIntelligence = {
    objects: new Array,
    canvas: null,
    lastRegister: 0,
    timeMsObject: 1500,
    start: (canvas) => {
        obstacleIntelligence.canvas = canvas;
    },
    draw: (ctx) => {
        
        for(let i = 0;i < obstacleIntelligence.objects.length;i++){
            
            obstacleIntelligence.objects[i].draw(ctx);
            
        };
    },
    update: (TempRegister) => {
        obstacleIntelligence.insertObstacle(TempRegister);

        
        for(let i =0;i < obstacleIntelligence.objects.length;i++){
            obstacleIntelligence.objects[i].update();
                if(obstacleIntelligence.objects[i].getY() > obstacleIntelligence.canvas.height){
                    obstacleIntelligence.objects.splice(i, 1);
            };
          
        }       
        
    },
    insertObstacle: (TempRegister) => {        

        if(TempRegister - obstacleIntelligence.lastRegister > obstacleIntelligence.timeMsObject){
            obstacleIntelligence.objects.push(new Obstacles(obstacleIntelligence.canvas));
            obstacleIntelligence.lastRegister = TempRegister;

            console.log(obstacleIntelligence.objects.length);
            //console.log(obstacleIntelligence.timeMsObject);
             
            let mathRandom = Math.random();
            let timeMS = 10000;

            let timeCalc = Math.ceil(mathRandom * timeMS);;

                if(timeCalc > 1000 && timeCalc < 6000){
                    obstacleIntelligence.timeMsObject = timeCalc;                    
                } 
        }
    }
};