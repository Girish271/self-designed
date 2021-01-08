var bg1,bg2;
var bgimg1,bgimg2;
var shooter,shooterImg;

function preload(){
  bgimg1=loadImage("sprites/GB-3.png")
  bgimg2=loadImage("sprites/city background.jpg")
  shooterImg=loadAnimation("sprites/10.png","sprites/20.png","sprites/30.png","sprites/40.png","sprites/50.png","sprites/60.png")
}


function setup() {
  createCanvas(1400,1200);
  bg1=createSprite(700,200 , 1400,1165);
  bg1.addImage(bgimg1)
  bg1.scale=1
  bg1.velocityX=-10
  shooter=createSprite(200,500,100,100)
  shooter.addAnimation("shooter",shooterImg)
  

  
  
}

function draw() {
  background(255,255,255);  
  if(bg1.x<600){
    bg1.x=900
  }
  if(keyDown("space")){
    shooter.velocityY=-2
  }
  drawSprites();
}