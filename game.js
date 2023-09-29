let lastRenderTime = 0;
const SNAKE_SPEED = 2;

const main = (currentTime) => {
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  update();
  draw();
};

window.requestAnimationFrame(main);

const update = () => {};

const draw = () => {};
