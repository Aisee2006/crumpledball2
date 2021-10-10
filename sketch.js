const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin1,dustbin2,dustbin3,paper,manimg,man;
function preload()
{
 manimg=loadImage("clean.png");
}

function setup() {
	createCanvas(1200,500);
    background(255);
	engine = Engine.create();
	world = engine.world;

    man=createSprite(1100,290,10,10);
	man.addImage(manimg);
	man.scale=0.7;

	//Create the Bodies Here.
     ground = new Ground(600,400,1200,20);
     dustbin = new Dustbin(900,300,150,150);
	 paper = new Paper(100,375,65);

	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0,0,255);

  ground.display();
  dustbin.display();
  paper.display();

  drawSprites();
  text("THROW PAPER INTO BIN BY PRESSING UP ARROW:",100,100);
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:120,y:-85});
	}
}



