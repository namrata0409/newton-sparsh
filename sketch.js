
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1 , bob2 , bob3 , bob4 , bob5;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob(100 , 500 , 100);
bob2 = new Bob(250 , 500 , 100);
bob3 = new Bob(400 , 500 , 100);
bob4 = new Bob(550 , 500 , 100);
bob5 = new Bob(700 , 500 , 100);
ground1 = new Ground(400 , 50 , 750 , 30);

rope1=new rope(bob1.body,ground1.body, -290,15);
rope2=new rope(bob2.body,ground1.body, -150,15);

//	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
//	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
//	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
//	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)
	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();
  rope1.display();
  rope2.display();

  drawSprites();
 
}



