const sprites = new Image();
sprites.src = '../sprites.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

//Objeto e posição do Flappy
const flappyBird = {
    spriteX:0,
    spriteY:0,
    largura:33,
    altura:24,
    posX:10,
    posY:50,

    draw () {
        context.drawImage(
            sprites,
            flappyBird.spriteX,flappyBird.spriteY, //sprite X,Y
            flappyBird.largura, flappyBird.altura, //tamanho
            flappyBird.posX, flappyBird.posY, //posição dentro do canvas
            flappyBird.largura, flappyBird.altura, //tamanho a aparecer no canvas
        );
    }
}
//Objeto e posição do Chão
const ground = {
    spriteX:0,
    spriteY:610,
    largura:224,
    altura:112,
    posX:0,
    posY: canvas.height -112,

    draw () {
        context.drawImage(
            sprites,
            ground.spriteX, ground.spriteY, //sprite X,Y
            ground.largura, ground.altura, //tamanho
            ground.posX, ground.posY, //posição dentro do canvas
            ground.largura, ground.altura, //tamanho a aparecer no canvas
        );

        context.drawImage(
            sprites,
            ground.spriteX, ground.spriteY, //sprite X,Y
            ground.largura, ground.altura, //tamanho
            (ground.posX+ground.largura), ground.posY, //posição dentro do canvas
            ground.largura, ground.altura, //tamanho a aparecer no canvas
        );
    }
}
//Objeto e posição do Chão
const background = {
    spriteX:390,
    spriteY:0,
    largura:275,
    altura:204,
    posX:0,
    posY: canvas.height -204,

    draw () {
        context.fillStyle = '#70c5ce';
        context.fillRect(0,0, canvas.width, canvas.height);
    
        context.drawImage(
            sprites,
            background.spriteX, background.spriteY, //sprite X,Y
            background.largura, background.altura, //tamanho
            background.posX, background.posY, //posição dentro do canvas
            background.largura, background.altura, //tamanho a aparecer no canvas
        );

        context.drawImage(
            sprites,
            background.spriteX, background.spriteY, //sprite X,Y
            background.largura, background.altura, //tamanho
            (background.posX+background.largura), background.posY, //posição dentro do canvas
            background.largura, background.altura, //tamanho a aparecer no canvas
        );
    }
}

function draws () {
}



//Chamada dos objetos, a ordem indica a camada que irá aparecer no canvas.
function loop () {
    draws();
    background.draw();
    ground.draw ();
    flappyBird.draw ();

    requestAnimationFrame (loop);//função adequada para o canvas ter a frequencia de 60hz no loop.
}
loop ();