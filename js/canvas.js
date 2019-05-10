const canvas = {
    canvas: null,
    ctx: null,
    start: () => {
        canvas.canvas = document.getElementById('canvas');
        canvas.canvas.style = "border: 2px solid black; display: flex; margin: auto";
        canvas.ctx = canvas.canvas.getContext('2d');
    }
};