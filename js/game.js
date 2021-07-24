const sprites = new Image();
sprites.src = '../sprites.png';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function loop () {
    ctx.drawImage(
        sprites,
        0, 0, //sprite X,Y
        33, 24, //tamanho
        10, 50,
        33, 24, //tamanho a aparecer no canvas
    );
    requestAnimationFrame(loop);
    
}
loop ();