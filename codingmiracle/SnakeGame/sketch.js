//window Sizes and game variables
const canvas = document.querySelector('canvas');
const colorAray = ["lime", "blue", "red", "yellow", "pink", "orange"];
let width;
let height;
var offsetx;
var offsety;
const blocksX = 44;
const blocksY = 24;
var blockSize = 1;
var pause = 0;
var playmode = 0;

//moves
const up = { x: 0, y: -1 };
const down = { x: 0, y: 1 };
const left = { x: -1, y: 0 };
const right = { x: 1, y: 0 };

//Game Speed - updates per second - fps
const fps = 120;
var gs = 50;
const bg = "#0e0e0e";
const playerbg = "#3e3e3e"

//functions

function block(num) {
    return num * blockSize;
}

function drawbg() {
    let c = canvas.getContext('2d');
    c.clearRect(offsetx, offsety, block(blocksX), block(blocksY));
    c.beginPath();
    c.rect(offsetx, offsety, block(blocksX), block(blocksY));
    if(playmode) {
        c.fillStyle = playerbg;
    } else {
        c.fillStyle = bg;
    }
    c.fill();
    
}

function updateSize() {
    width = window.innerWidth;
    height = window.innerHeight - 1;
    blockSize = 1;
    while(1) {
        if(block(blocksX) >= width || block(blocksY) >= height) {
            blockSize -= 1;
            break;
        }
        blockSize += 1;
    }
    offsetx = Math.floor(width - block(blocksX)) / 2;
    offsety = Math.floor(height - block(blocksY)) / 2;
    if(offsetx % 1 == 0.5) {
        offsetx -= 0.5;
    } if(offsety % 1 == 0.5) {
        offsety -= 0.5;
    }
    canvas.width = width;
    canvas.height = height;
}


// -- main functions --

function setup() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const screen = canvas.getContext('2d');

    updateSize();

    addEventListener('keydown', keyEvent);
    addEventListener('keyup', keyReleased);
}

function draw() {
    drawbg();
    apple.draw();
    snake.draw();
}

function update() {
    updateSize();
    if (!pause) {
        snake.update();
    }
    draw();
}

function keyEvent(event) {
    console.log(event.keyCode, gs);
    switch (event.keyCode) {
        case 87: if (snake.dir != down && playmode) {
            snake.setdir(up);
        }
            break;  //w
        case 65:
            if (snake.dir != right && playmode) {
                snake.setdir(left);
            }
            break;  //a
        case 83: if (snake.dir != up && playmode) {
            snake.setdir(down);
        }
            break;  //s
        case 68: if (snake.dir != left && playmode) {
            snake.setdir(right);
        }
            break;  //d
        case 32:
            if (playmode) {
                if (pause) {
                    pause = 0;
                } else {
                    pause = 1;
                }
            } else {
                clearInterval(hupdate);
                hupdate = setInterval(update, 0.05);
            }
            break;  //space
        case 171:
            if (gs < 1000) {
                gs += 1;
            }
            clearInterval(hupdate);
            hupdate = setInterval(update, 1000 / gs);
            break;   //+
        case 173:
            if (gs > 1) {
                gs -= 1;
            }
            clearInterval(hupdate);
            hupdate = setInterval(update, 1000 / gs);
            break;   //-
        case 80:
            playmode = 1;
            gs = 8;
            clearInterval(hupdate);
            hupdate = setInterval(update, 1000 / gs);
            buffsnake = snake
            snake = new Snake((blocksX / 2), (blocksY / 2), 3, up);
            break; //p
    }
}

function keyReleased(event) {
    switch (event.keyCode) {
        case 81:
            clearInterval(hupdate);
            hupdate = setInterval(update, 1000 / gs);
            break;
    }
}

// -- main --

hc = new HamiltonianCycle(blocksX, blocksY);
var snake = new Snake((blocksX / 2), (blocksY / 2), 3, up);
var buffsnake = snake;
snake.resetOnHamiltonian(hc.cycle);
var apple = new Apple(snake);


setup();

var hdraw = setInterval(draw, 1000 / fps);

var hupdate = setInterval(update, 1000 / gs);









