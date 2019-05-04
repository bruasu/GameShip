const obstacleIntelligence = {
    objects: new Array,
    canvas: null,
    lastRegister: 0,
    timeMsObject: 3000,
    start: (canvas) => {
        obstacleIntelligence.canvas = canvas;
    },
    draw: (ctx) => {
        let i = 0;
        while(i < obstacleIntelligence.objects.length && obstacleIntelligence.objects.length > 1){
            obstacleIntelligence.objects[i].draw(ctx);
            i++;
        };
    },
    update: (TempRegister) => {
        obstacleIntelligence.insertObstacle(TempRegister);

        let i =0;
        while(i < obstacleIntelligence.objects.length && obstacleIntelligence.objects.length > 1){
            obstacleIntelligence.objects[i].update();
                if(obstacleIntelligence.objects[i].getY() > obstacleIntelligence.canvas.height){
                    obstacleIntelligence.objects.splice(i, 1);
                };
            i++;
        }       
        
    },
    insertObstacle: (TempRegister) => {        

        if(TempRegister - obstacleIntelligence.lastRegister > obstacleIntelligence.timeMsObject){
            obstacleIntelligence.objects.push(new Obstacles(obstacleIntelligence.canvas));
            obstacleIntelligence.lastRegister = TempRegister;

            console.log(obstacleIntelligence.objects.length);
            console.log(obstacleIntelligence.timeMsObject);
             
            let mathRandom = Math.random();
            let timeMS = 10000;

            let timeCalc = Math.ceil(mathRandom * timeMS);;

                if(timeCalc > 3000 && timeCalc < 8000){
                    obstacleIntelligence.timeMsObject = timeCalc;                    
                } 
        }
    }
};