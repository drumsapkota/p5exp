function setup(){
	createCanvas(740,400);
	background(200);

	//set colors
	fill(204,101,192,127);
	stroke(127,63,120);

	//a rectangle
	rect(40,120,120,40);

	//an ellipse
	ellipse(240,240,80,80);

	//a triangle
	triangle(300,100,320,100,310,80);

	//designn of a simple flower
	translate(580,200);
	noStroke();
	for(var i=0; i<10; i++){
		ellipse(0,30,20,80);
		rotate(PI/5);
	}
}

