
let img;
function preload() {
  img = loadImage('media/sunflower.png');
  img2 = loadImage('media/can.png');
  myFont = loadFont('media/futura medium condensed bt.ttf');
  mySound = loadSound('media/water.mp3');
}

function setup() {
  createCanvas(400, 400);
  background('#F8BAAC');
 // fill('#ED225D');
  //textFont(myFont);
  //textSize(24);
  //text('click to water the flowers', 100, 100);
  //noStroke();
  //fill('#2B9900');
  //rect(70, 250, 5, 150);
 // noStroke();
  //fill('#2B9900');
 // rect(198, 250, 5, 150);
 // noStroke();
 // fill('#2B9900');
//  rect(340, 250, 5, 150);
 // noStroke();
 // fill('#C55F4E');
 // rect(20, 330, 360, 70);
  
  
  
}

let x=150;
function draw() {
  noStroke();
  fill('#F8BAAC')
  rect(0,0,400,80);
  fill('#ED225D');
  textFont(myFont);
  textSize(24);
  text('click to water the flowers', 100, 100);
  noStroke();
  fill('#2B9900');
  rect(70, 250, 5, 150);
  noStroke();
  fill('#2B9900');
  rect(198, 250, 5, 150);
  noStroke();
  fill('#2B9900');
  rect(340, 250, 5, 150);
  noStroke();
  fill('#C55F4E');
  rect(20, 330, 360, 70);
  
  image(img, 130,160, x,x);
  image(img, 0,140, x,x);
  image(img, 270,150, x,x);
  image(img2, mouseX,0, 80,80);
  fill('#D1CEBE');
  textFont(myFont);
  textSize(18);
  text('you are like a garden, take care of yourself and be patient', 35, 370);
} 

function mousePressed(){
   background('#F8BAAC');
fill('#D8EFF4');
  rect( mouseX, 0, 10, 200);
  mySound.playMode('sustain');
  mySound.play();
}

  




