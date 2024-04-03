class Vector {
  public x: number;
  public y: number;
  public norm: number;

  constructor(x: number = 0, y: number = 0) {
    this.norm = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    this.x = x;
    this.y = y;
  }

  add(vector: Vector): Vector {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  multiply(scalar: number): Vector {
    return new Vector(this.x * scalar, this.y * scalar);
  }

  scalarProduct(vector: Vector): number {
    return this.x * vector.x + this.y * vector.y;
  }

  normalize(): Vector {
    return new Vector(this.x / this.norm, this.y / this.norm);
  }

  getPerpendicular(): Vector {
    return new Vector(this.y, -this.x);
  }
}

export { Vector };
