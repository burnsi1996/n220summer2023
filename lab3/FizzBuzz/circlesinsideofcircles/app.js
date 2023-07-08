function setup() {
    createCanvas(400,300);
}

function draw () {
    background(100);
}

//noFill();

//For Loop syntax
for(var i = 1; i> 0; i--) {

    var color = Math.random();
    console.log(color);

    stroke(255 -(i*1));

    circle(200, 150, i* 1);
}
