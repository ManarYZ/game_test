// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/147-chrome-dinosaur.html
// https://yAxisoutu.be/l0HoJHc-63Q

// Google Chrome Dinosaur Game (Player, run!)
// https://editor.p5js.org/codingtrain/sketches/v3thq2uhk

class Obstacle {
    constructor() {
        this.size = 90;
        this.xAxis = width;
        this.yAxis = height - this.size;
    }

    move() {
        this.xAxis -= 10;
    }

    display() {
        image(obstacleImage, this.xAxis, this.yAxis, this.size, this.size);

        // fill(255, 50);
        // ellipseMode(CORNER);
        // ellipse(this.xAxis, this.yAxis, this.size, this.size);
    }
}