const BG_COLOR = '#bada55';
const gameScreen = document.getElementById('gameScreen')


function init () {
    const canvas = document.getElementById('game')
    const ctx = canvas.getContext('2d')

    canvas.height = canvas.width = 500;
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0,0,canvas.width,canvas.height)
    document.addEventListener('keydown', keyDown)
}

function keyDown(e){
    console.log(e.keyCode)
}

init()