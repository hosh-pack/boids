import { Point } from './point';

const DOT_RADIUS = 8;
const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;

const getRandomPosition = () => {
  const x = (Math.floor(Math.random() * 100) * WINDOW_WIDTH) / 100;
  const y = (Math.floor(Math.random() * 100) * WINDOW_HEIGHT) / 100;
  return { x, y };
};

class Dot {
  position: Point;
  dotElement: HTMLDivElement;

  constructor() {
    this.dotElement = document.createElement('div');
    this.dotElement.setAttribute('class', 'dot');
    this.position = getRandomPosition();
    this.set();
  }

  set() {
    this.dotElement.setAttribute(
      'style',
      `width: ${DOT_RADIUS}px; height: ${DOT_RADIUS}px;`,
    );
    this.dotElement.style.left = `${this.position.x}px`;
    this.dotElement.style.top = `${this.position.y}px`;
  }

  move() {
    this.position = getRandomPosition();
    this.set();
  }
}

export { Dot };
