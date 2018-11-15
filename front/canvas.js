'use strict'


var canvas, context
var spriteCharacter = new Image()//document.getElementById('imgCharacter')
spriteCharacter.src = 'Green-Cap-Character-16x18.png'
spriteCharacter.onload = function(){
    initCanvas()
}

function initCanvas() {
    canvas = document.getElementById('myCanvas')
    context = canvas.getContext('2d')
    context.font = '14px Verdana'
    mainLoop()
}

function mainLoop() {
    let x = 0
    let y = 0
    setInterval(() =>{
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawCurrentPosition(x++,y++)
    }, 500)

}



function drawCurrentPosition(posicaoX, posicaoY){
    //context.drawImage(imagem, posicaoStripeX, posicaoSpriteY, widthImagem, heightImagem, posicaoXCanvas, posicaoYCanvas, widthImagem, heightImagem)
    context.drawImage(spriteCharacter, 0, 0, 16, 18, posicaoX, posicaoY, 16, 18)
    context.save()
}

