import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake';
import { update as updateFood, draw as drawFood } from './food';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

const main = (currentTime) => {
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  update();
  draw();
};

window.requestAnimationFrame(main);

const update = () => {
  updateSnake();
  updateFood();
};

const draw = () => {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
};
