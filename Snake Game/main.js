let snakeArr = [{ x: 13, y: 13 }];
let food = { x: 2, y: 6 };
let snakePos = { x: 0, y: 0 };
let eve = 0;
let ec = 0;
let score = 0;
const speed = 10;
let lastLoadTime = 0;
let startSound = new Audio("music/music.mp3");
let eatSound = new Audio("music/food.mp3");
let gameOverSound = new Audio("music/gameover.mp3");
let highScore=0



function snakeHits() {
  for (let i = 1; i < snakeArr.length; i++) {
    if (snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y)
      return true;
  }
  if (
    snakeArr[0].x <= 1 ||
    snakeArr[0].x > 14 ||
    snakeArr[0].y <= 1 ||
    snakeArr[0].y > 14
  )
    return true;
  return false;
}
function startGame() {
  startSound.play();
  gameArea = document.getElementById("gameArea");
  if (snakeHits()) {
    gameOverSound.play();
    startSound.pause();
    snakePos = { x: 0, y: 0 };
    alert("Game Over. Press any key to play again!");
    snakeArr = [{ x: 13, y: 13 }];
    startSound.play();
    score = 0;
    document.getElementById("scoreValue").innerHTML=0;
  }
  if (snakeCollidesFood()) {
    startSound.pause();
    eatSound.play();
    console.log("Eat");
    score++;
    document.getElementById("scoreValue").innerHTML=score;
    if(highScore<score)
    {   highScore=score;
        document.getElementById("highScoreValue").innerHTML=highScore;
   
    }
    snakeArr.unshift({
      x: snakeArr[0].x + snakePos.x,
      y: snakeArr[0].y + snakePos.y,
    });
    let a = 2;
    let b = 14;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };

  }
  
  if (eve > ec) {
    for (let i = snakeArr.length - 2; i >= 0; i--) {
      snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += snakePos.x;
    snakeArr[0].y += snakePos.y;
    ec = eve;
  }
  gameArea.innerHTML = "";
  snakeArr.forEach((e, index) => {
    let snakeBody = document.createElement("div");
    snakeBody.style.gridRowStart = e.y;
    snakeBody.style.gridColumnStart = e.x;
    if (index == 0) snakeBody.classList.add("head");
    else snakeBody.classList.add("snake");
    gameArea.appendChild(snakeBody);
  });

  let foodPiece = document.createElement("div");
  foodPiece.style.gridRowStart = food.y;
  foodPiece.style.gridColumnStart = food.x;
  foodPiece.classList.add("food");
  gameArea.appendChild(foodPiece);
}
function snakeCollidesFood() {
  if (snakeArr[0].x == food.x && snakeArr[0].y == food.y) return true;
  return false;
}
function loadGame(ctime) {
  window.requestAnimationFrame(loadGame);
  if ((ctime - lastLoadTime) / 1000 < 1 / speed) return;
  else {
    lastLoadTime = ctime;
    startGame();
  }
}
window.requestAnimationFrame(loadGame);

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      snakePos.x = 0;
      snakePos.y = -1;
      eve++;
      console.log(eve, ec);
      break;
    case "ArrowDown":
      snakePos.x = 0;
      snakePos.y = 1;
      eve++;

      break;
    case "ArrowLeft":
      snakePos.x = -1;
      snakePos.y = 0;
      eve++;

      break;
    case "ArrowRight":
      snakePos.x = 1;
      snakePos.y = 0;
      eve++;
      break;
    default:
      break;
  }
});