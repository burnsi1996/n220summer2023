//This particular loop will run twenty five times
for(let i = 0; i < 25; i++);
{
console.log(i);
}

function draw() {
    background(100);

    //For loop syntax
    for(var i = 50; i < 50; i++) {
        circle(100,100, i / 3);
    }
    console.log("Afterwards:" + i);
}
