import { SnakeHitFood } from "./snake.js";

let food = {x: 12, y: 12};
let min = Math.ceil(1);
let max = Math.floor(26);
let xRandom = Math.floor(Math.random() * (max - min) + min);
let yRandom = Math.floor(Math.random() * (max - min) + min);

export function updateFood() {
    if (SnakeHitFood(food)) {
        food = {x: xRandom, y: yRandom};
    }
}

export function renderFood(snakeGame) {
   console.log("FOOD!")
    const foodPiece = document.createElement("f");
    foodPiece.style.gridRowStart = food.x;
    foodPiece.style.gridColumnStart = food.y;
    foodPiece.classList.add("food");
    snakeGame.appendChild(foodPiece);
}



