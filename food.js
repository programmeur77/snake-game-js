/**
 * @file Manages Snake's food. Very similar to snake.js file
 * @author Benoît Puech and Kyle from Web Dev Simplified
 */

let food = { x: 0, y: 0 };

export const update = () => {};

export const draw = (gameBoard) => {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
};
