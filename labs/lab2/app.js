function setup() {
    createCanvas(400, 300);
    fill(1, 102);
    noStroke();
}
function draw() {
    background(204);
    circle(mouseX, mouseY, 20);
    if (mouseX < 200) {
        fill(10, 7, 224);
    }
    else {
        fill(237, 25, 9);
    }

}