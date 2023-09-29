import { getInputDirection } from './input';

export const SNAKE_SPEED = 2;

const snakeBody = [{ x: 11, y: 11 }];

export const update = () => {
  getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = [...snakeBody[i]];
  }

  //   snakeBody[0].x += 0;
  //   snakeBody[0].y += 1;
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
