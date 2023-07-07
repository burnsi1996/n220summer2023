let xPos = -1;
 var x = 180;
 var y = 121;
let xSpeed = 5;
let ySpeed = 5;

function draw() {
	x = x + xSpeed; 
    y = y + ySpeed;
	circle(x, y, 30);
    if (y > 600) {
        ySpeed = ySpeed * -1;
    }
    if (x > 800) {
        xSpeed = xSpeed * -1;
    }
    if (y < 0) {
        ySpeed = ySpeed * -1;
    }
    if (x < 0) {
        xSpeed = xSpeed * -1;
    }
}
function setup() { 
    createCanvas(800, 600);
}

