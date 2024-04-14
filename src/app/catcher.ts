import { Vector } from './vector';
import { Bot } from './bot';

const CATCHER_RADIUS = 100;

class Catcher {
  position: Vector | null = null;
  radius: number = CATCHER_RADIUS;
  closestBot: Bot | null = null;

  constructor() {
    addEventListener('mousemove', (e) => {
      this.position = new Vector(e.clientX, e.clientY);
    });
    addEventListener('touchmove', (e) => {
      this.position = new Vector(e.touches[0].clientX, e.touches[0].clientY);
    });
    addEventListener('touchend', () => {
      this.position = null;
    });
  }

  findClosestBots(bots: Bot[]): Bot[] {
    return bots.filter((bot) =>
      this.position
        ? this.position.add(bot.position.multiply(-1)).norm < this.radius
        : false,
    );
  }

  draw(ctx: CanvasRenderingContext2D, bots: Bot[]) {
    bots.forEach((bot) => {
      if (!this.position) return;
      ctx.beginPath();
      ctx.strokeStyle = '#646464';
      ctx.moveTo(this.position.x, this.position.y);
      ctx.lineTo(bot.position.x, bot.position.y);
      ctx.stroke();
    });
  }
}

export { Catcher };
