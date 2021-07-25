var bgImg;
var snowImg;
var human,humanImg;
function preload(){
bgImg=loadImage("snow2.jpg")
snowImg=loadImage("snow5.webp")

}

function setup() {
  createCanvas(800,400);
  bg=createSprite(400, 200, 800, 400);
  bg.addImage(bgImg);



}
 
function draw() {
  background(255,255,255); 
 spawnSnow(); 
  drawSprites();
  
}

function spawnSnow(){
  if(frameCount%10===0)
  {
    var snow=createSprite(200,0);
    snow.addImage(snowImg);
    snow.scale=0.05
  
    snow.x=Math.round(random(0,800));
    snow.velocityY=2;
  }
 
}