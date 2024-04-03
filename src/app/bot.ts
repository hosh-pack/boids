import { Vector } from './vector';

const DOT_RADIUS = 2;
const GRAY_SCALE_MIN = 100;
const GRAY_SCALE_MAX = 220;
const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;
const SPEED_MULTIPLIER = 0.02;

class Bot {
  position: Vector;
  speed: Vector;
  width: number = DOT_RADIUS;
  height: number = DOT_RADIUS;
  color: string = '#000000';

  constructor(
    startPosition: Vector = new Vector(0, 0),
    startSpeed: Vector = new Vector(0, 0),
  ) {
    this.position = startPosition;
    this.speed = startSpeed;

    // Generate a random color for the bot
    const randomInteger =
      Math.floor(Math.random() * (GRAY_SCALE_MAX - GRAY_SCALE_MIN + 1)) +
      GRAY_SCALE_MIN;
    const hexString = randomInteger.toString(16);

    this.color = `#${hexString}${hexString}${hexString}`;

    setInterval(() => {
      this.correctPosition();
    }, 1000);
  }

  correctPosition() {
    if (this.position.x < 0 || this.position.x > WINDOW_WIDTH) {
      this.speed.x *= -1;
    }
    if (this.position.y < 0 || this.position.y > WINDOW_HEIGHT) {
      this.speed.y *= -1;
    }
  }

  setColor() {
    const randomInteger =
      Math.floor(Math.random() * (GRAY_SCALE_MAX - GRAY_SCALE_MIN + 1)) +
      GRAY_SCALE_MIN;
    const hexString = randomInteger.toString(16);
    this.color = `#${hexString}${hexString}${hexString}`;
  }

  move(deltaTime: number) {
    this.position = this.position.add(
      this.speed.multiply(SPEED_MULTIPLIER * deltaTime),
    );
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    const perp = this.speed.getPerpendicular().multiply(4);
    const middle = this.position;
    const tip = this.position.add(this.speed.multiply(10));
    const left = this.position.add(perp).add(this.speed.multiply(-2));
    const right = this.position
      .add(perp.multiply(-1))
      .add(this.speed.multiply(-2));
    ctx.beginPath();
    ctx.moveTo(middle.x, middle.y);
    ctx.lineTo(left.x, left.y);
    ctx.lineTo(tip.x, tip.y);
    ctx.lineTo(right.x, right.y);
    ctx.closePath();
    ctx.fill();
  }
}

export { Bot };
