var x, y;

function setup(){
	createCanvas(720,400);
	x = width / 2;
	y = height;
}

function draw(){
	background(200);

	//draw a circle
	stroke(50);
	fill(100);
	ellipse(x, y, 24, 24);

	//jiggle
	x = x + random(-1, 1);
	//move up at constant speed
	y = y - 1;

	//reset to the bottom

	if(y<0){
		y = height;
	}
}