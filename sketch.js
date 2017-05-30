

function setup(){
	createCanvas(480,440);
	background(0);
	//create a audio input and start it
	mic = new p5.AudioIn();
	mic.start();
	//create a new amplitude analyzer and patch input into it
	amp = new p5.Amplitude();
	amp.setInput(mic);

}

function draw(){
	noStroke();
	fill(12,12,12,10);
	rect(0,0,width,height);
	scale = map(amp.getLevel(),0,1.0,10,width);
	//draw the circle based on volume
	fill(255);
	newScale = random(scale, scale *30);
	ellipse(width/2,height/2, newScale, newScale);
}

