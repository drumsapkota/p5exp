

function setup(){
	createCanvas(480,120);
	//fill(255);
	//stroke(102);
}

function draw(){
	background(0);
	for(var y = 20; y <= height; y+=8){
		for(var x = 12; x <= width; x+=15){
			ellipse(x+y,y,16-y/10.0,16-y/10.0);
			
		}
	}
}

