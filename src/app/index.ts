import { Dot } from './dot';

const setup = () => {
  // const DOT_RADIUS = 8;
  // const LIMIT = 100;
  // const MAX_SPEED = 10;
  // const SPEEED = 5;
  const WINDOW_WIDTH = window.innerWidth;
  const WINDOW_HEIGHT = window.innerHeight;
  const PIXEL_COUNT = WINDOW_WIDTH * WINDOW_HEIGHT;
  const DOT_COUNT = Math.floor((100 * PIXEL_COUNT) / 1000000);

  const dots = new Array(DOT_COUNT);
  const background = document.querySelector('div#background');

  for (let index = 0; index < dots.length; index++) {
    dots[index] = new Dot();
    const dot = dots[index];
    background?.appendChild(dot.dotElement);
  }
  setInterval(() => {
    for (let index = 0; index < dots.length; index++) {
      const dot = dots[index];
      dot.move();
    }
  }, 1000);
};

export { setup };
