
function setup() {
  createCanvas(400, 400);
}

var x = 5;
var changeInX = 2;
var playedSound = false;

function preload() {
  mySound = loadSound('5986.mp3');
}

	
function draw(){
  background(255);
	
	strokeWeight(1)
	fill(255,255,255)
	ellipse(x,230,30);

	 x = x + changeInX;

    if (x < 0) {
        changeInX = 2;
    }
	
    if (x >330) {
        changeInX = 0;
       if (playedSound == false) {
        playedSound = true;
			  mySound.setVolume(0.1);
        mySound.play();
         }
    }
  
  

	strokeWeight(4)
line(300,150,300,245)
	line(300,244,380,244)
	
	strokeWeight(1)
	line(300,148,380,243)
	
	
	strokeWeight(5)
	fill(0,0,0)
	line(0,250,width,250)
	
	strokeWeight(0)
	fill(0,255,0)
rect(0,245,width,3)
}



