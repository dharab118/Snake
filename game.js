import { updateSnake, renderSnake, SNAKE_SPEED} from './snake.js' 
import { updateFood, renderFood} from './food.js'

// this loop gives us the speed of each render
// by setting LastRenderTime to currentTime, and doing the below formula, we are able to get 
// the time between the two renders / 1000 to get in seconds

let lastRenderTime = 0;
const snakeGame = document.getElementById("snake-game");

// how fast the snake moves/updates 

function gameLoop(currentTime) {
    window.requestAnimationFrame(gameLoop);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    
    if (secondsSinceLastRender < (1 / SNAKE_SPEED)) {
        return;
    }
    else {
    lastRenderTime = currentTime;
    updateGame();
    renderGame();
    }
}

window.requestAnimationFrame(gameLoop); 

// update loop

function updateGame() {
    updateSnake();
    updateFood();
}

// render loop
function renderGame() {
    // clears the game board 
    snakeGame.innerHTML = "";
    renderSnake(snakeGame);
    renderFood(snakeGame);
}

