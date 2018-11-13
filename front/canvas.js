'use strict'

var canvas, context;





function initCanvas(){
    canvas = document.getElementById('myCanvas')
    context = canvas.getContext('2d')
    context.fillStyle = '#FF0000'
    context.fillRect(0, 0, 800, 500)
}

initCanvas()