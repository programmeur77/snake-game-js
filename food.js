/**
 * @file Manages Snake's food. Very similar to snake.js file
 * @author Benoît Puech and Kyle from Web Dev Simplified
 */

import { onSnake, expandSnake } from './snake';

let food = { x: 0, y: 0 };

const EXPANSION_RATE = 1;

export const update = () => {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = { x: 20, y: 10 };
  }
};

export const draw = (gameBoard) => {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
};
