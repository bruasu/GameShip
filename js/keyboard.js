const keyboard = {
    keys: new Array(),
    start: () => {
        document.onkeydown = keyboard.saveKey;
        document.onkeyup = keyboard.deleteKey;
    },
    saveKey: (e) => {
        if(keyboard.keys.indexOf(e.key) == -1){
            keyboard.keys.push(e.key);
        }
    },
    deleteKey: (e) => {
        let position = keyboard.keys.indexOf(e.key);
        if(position !== -1){
            keyboard.keys.splice(position, 1);
        }
    },
    pressKey: (keyCode) => {
        return (keyboard.keys.indexOf(keyCode) !== -1) ? true : false;
    }    
};