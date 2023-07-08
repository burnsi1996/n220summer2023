function setup() {
    createCanvas(800, 600);

}

function draw() {
    background(204);
    rect(30,50);
    rect(40, 50);
}
function rect (x, y) {
push();
translate(x, y);
}