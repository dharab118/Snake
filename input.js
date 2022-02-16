let inputDirection = { x: 0, y: 0 };
let lastInputDirection = {x: 0, y: 0};

export function getInputDirect() {
    lastInputDirection = inputDirection;
    return inputDirection;
}

// adding key input 

document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowDown") {
        if (lastInputDirection.y !== 0) {
        inputDirection;
        }
        else {
        inputDirection.y++;
        inputDirection.x = 0;
        }
    }
    else if (event.key == "ArrowUp") {
        if (lastInputDirection.y !== 0) {
            inputDirection;
        }
        else {
        inputDirection.y--;
        inputDirection.x = 0;
        }
    }
    else if (event.key == "ArrowLeft") {
        if (lastInputDirection.x != 0) {
            inputDirection;
        }
        else {
        inputDirection.x--;
        inputDirection.y = 0;
        }
    }
    else if (event.key == "ArrowRight") {
        if (lastInputDirection.x != 0) {
            inputDirection;
        }
        else {
        inputDirection.x++;
        inputDirection.y = 0;
        }
    }
}, false);




