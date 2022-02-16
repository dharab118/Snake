export const SNAKE_SPEED = 5; 
import { getInputDirect } from "./input.js";
// an array that stores the location of each snake segment
// starting with snake at top middle location
const snakeBody = [{ x: 13, y: 13}]
let snakeHead = snakeBody[0];
          

export function updateSnake() {
    console.log("update snake");
    moveSnake();

}

function moveSnake() {
const inputDirection = getInputDirect();
for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
}
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function SnakeHitFood(foodPos) {
    return (snakeHead.x == foodPos.x && snakeHead.y == foodPos.y)
}

export function renderSnake(snakeGame) {
// loop through snake segment and draw them to the screen
snakeBody.forEach(segment => {
    const snakeSeg = document.createElement("e");
    snakeSeg.style.gridRowStart = segment.y;
    snakeSeg.style.gridColumnStart = segment.x;
    snakeSeg.classList.add("snake");
    snakeGame.appendChild(snakeSeg);
})
}
