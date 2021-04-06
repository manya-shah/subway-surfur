var roadImage
var road
var jake 
var jakeImage
var border1
var border2
function preload(){
  //pre-load images
 roadImage = loadImage("path.png")
  jakeImage=loadAnimation("Jake1.png","Jake2.png", "jake3.png", "jake4.PNG", "jake5.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road=createSprite(200,200) 
  road.addImage(roadImage) 
  road.velocityY=3
  road.scale=1.3
  jake=createSprite(180,340)
  jake.addAnimation("running",jakeImage)
  border=createSprite(20,200,10,400)
  border2=createSprite(380,200,10,400)
  border.visible=false
  border2.visible=false
}

function draw() {
  background(0);
 if(road.y>300){
  road.y=200
   
 }
  jake.x=World.mouseX
  
  jake.collide(border)
  jake. collide(border2)
  
drawSprites() 
 
}
