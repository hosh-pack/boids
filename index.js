// Constant Declarations -----------------------------------------------------
const DOT_RADIUS = 8;
const LIMIT = 100;
const SPEEED = 5;
const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;
// ---------------------------------------------------------------------------
// Class Declarations --------------------------------------------------------
class Dot {
    position = null;
    dotElement = null;

    constructor() {
        this.dotElement = document.createElement('div');
        this.dotElement.setAttribute('class', 'dot');
        this.position = getRandomPosition();
        this.set();
    }

    set() {
        this.dotElement.setAttribute('style', `width: ${DOT_RADIUS}px; height: ${DOT_RADIUS}px;`);
        this.dotElement.style.left = `${this.position.x}px`;
        this.dotElement.style.top = `${this.position.y}px`;
    }

    move() {
        this.position = getRandomPosition();
        this.set();
    }
}

class Point {
    x = 0;
    y = 0;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

class Vector {
    start = new Point();
    end = new Point();

    constructor(start = {x: 0, y: 0}, end) {
        this.start = start;
        this.end = end;
    }

    getDistance() {
        return Math.sqrt(Math.pow(this.end.x - this.start.x, 2) + Math.pow(this.end.y - this.start.y, 2));
    }
}
// ----------------------------------------------------------------------------
// Oject Declarations ---------------------------------------------------------
const dots = new Array(100);
const background = document.querySelector('div#background');
// ----------------------------------------------------------------------------
// Function Declarations ------------------------------------------------------
const getRandomPosition = () => {
    const x = (Math.floor(Math.random() * 100 ) * WINDOW_WIDTH)/100;
    const y = (Math.floor(Math.random() * 100 ) * WINDOW_HEIGHT)/100;
    return {x, y};
}
const setup = () => {
    
    for (let index = 0; index < dots.length; index++) {
        dots[index] = new Dot();
        const dot = dots[index];
        background.appendChild(dot.dotElement);    
    }

}
// ----------------------------------------------------------------------------


// Calls ---------------------------------------------------------------------
setup();
setInterval(() => { 
    for (let index = 0; index < dots.length; index++) {
        const dot = dots[index];
        dot.move();
    }
 }, 1000)
// ----------------------------------------------------------------------------



