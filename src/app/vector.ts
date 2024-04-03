import { Point } from './point';

class Vector {
  start: Point;
  end: Point;

  constructor(start: Point = new Point(0, 0), end: Point) {
    this.start = start;
    this.end = end;
  }

  getDistance() {
    return Math.sqrt(
      Math.pow(this.end.x - this.start.x, 2) +
        Math.pow(this.end.y - this.start.y, 2),
    );
  }
}
export { Vector };
//
