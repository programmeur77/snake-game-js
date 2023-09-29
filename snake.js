import { getInputDirection } from './input';

export const SNAKE_SPEED = 2;
const snakeBody = [{ x: 11, y: 11 }];
const newSegments = 0;

export const update = () => {
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = [...snakeBody[i]];
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
};

export const draw = (gameBoard) => {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  });
};

export const expandSnake = (amount) => {
  newSegments = amount;
};

export const onSnake = (position) => {
  return snakeBody.some((segment) => {
    return equalPositions(segment, position);
  });
};

const equalPositions = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};
