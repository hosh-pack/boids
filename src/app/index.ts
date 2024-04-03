import { Bot } from './bot';
import { Catcher } from './catcher';
import { Vector } from './vector';

// Constants
const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;
const PIXEL_COUNT = WINDOW_WIDTH * WINDOW_HEIGHT;
const DOT_COUNT = Math.floor((100 * PIXEL_COUNT) / 1000000);

// Variables
let canvas: HTMLCanvasElement | null;
let previousTimeStamp: DOMHighResTimeStamp = 0;
const catcher: Catcher = new Catcher();
const bots: Bot[] = [];

const setup = () => {
  canvas = document.querySelector<HTMLCanvasElement>('canvas');

  if (!canvas) return;

  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;

  window.requestAnimationFrame(draw);

  for (let index = 0; index < DOT_COUNT; index++) {
    // Generate a random starting position for the bot
    const startPositionX =
      (Math.floor(Math.random() * 100) * WINDOW_WIDTH) / 100;
    const startPositionY =
      (Math.floor(Math.random() * 100) * WINDOW_HEIGHT) / 100;
    const startPosition = new Vector(startPositionX, startPositionY);

    // Generate a random speed for the bot
    const startSpeedX = Math.floor(Math.random() * 10) - 5;
    const startSpeedY = Math.floor(Math.random() * 10) - 5;
    const startSpeed = new Vector(startSpeedX, startSpeedY).normalize();

    // Create a new bot
    bots[index] = new Bot(startPosition, startSpeed);
  }
};

const draw = (timeStamp: DOMHighResTimeStamp) => {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate the time that has passed since the last frame
  const deltaTime = timeStamp - previousTimeStamp;

  // Move and draw each bot
  bots.forEach((bot) => {
    bot.move(deltaTime);
    bot.draw(ctx);
  });

  const closestBots = catcher.findClosestBots(bots);
  catcher.draw(ctx, closestBots);
  // Update the previous time stamp
  previousTimeStamp = timeStamp;

  // Request the next frame
  window.requestAnimationFrame(draw);
};

export { setup };
