// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/147-chrome-dinosaur.html
// https://youtu.be/l0HoJHc-63Q

// Google Chrome Dinosaur Game (player, run!)
// https://editor.p5js.org/codingtrain/sketches/v3thq2uhk

class Player {
    constructor() {
        this.size = 120;
        this.xAxis = 50;
        this.yAxis = height - this.size;
        // this.yAxis = 50;
        this.velocityYAxis = 0;
        this.gravity = 3;
    }

    jump() {
        if (this.yAxis == height - this.size) {
            this.velocityYAxis = -40;
        }
    }

    isCollision(obstacle) {
        let playerXAxis = this.xAxis + this.size * 0.5;
        let playerYAxis = this.yAxis + this.size * 0.5;
        let obstacleXAxis = obstacle.xAxis + obstacle.size * 0.5;
        let obstacleYAxis = obstacle.yAxis + obstacle.size * 0.5;
        return collideCircleCircle(playerXAxis, playerYAxis, this.size, obstacleXAxis, obstacleYAxis, obstacle.size);
    }

    move() {
        this.yAxis += this.velocityYAxis;
        this.velocityYAxis += this.gravity;
        this.yAxis = constrain(this.yAxis, 0, height - this.size);
    }

    display() {
        image(playerImage, this.xAxis, this.yAxis, this.size, this.size);

        // fill(255, 50);
        // ellipseMode(CORNER);
        // ellipse(this.xAxis, this.yAxis, this.size, this.size);
    }
}