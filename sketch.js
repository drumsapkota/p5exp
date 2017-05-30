

function setup(){
	createCanvas(480,420);
	noStroke();
	//strokeWeight(2);
}

function draw(){
	background(0);
	
	for(var y = 0; y<= height; y+=40){
		for(var x = 0; x <= width;  x+=40){
			fill(random(0,255),random(0,255),random(0,255),);
			ellipse(x,y,40,40);
		}
	}
}

