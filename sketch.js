

function setup(){
	createCanvas(480,420);
	strokeWeight(2);
}

function draw(){
	background(204);
	
	//for(var i= 20, i < 400, i += 8){
	for( i = 20; i < 400; i = i+ 10){	
		line(20,40, random(110,140), 180 + random (1,120));
	}

}

