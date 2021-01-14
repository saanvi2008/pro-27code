
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var rope1,bob1,bob2,bob3,bob4,bob5,bobDiameter;
var rope2,rope3,rope4,rope5;
var start;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

  startBobPositionX = width/2;
  startBobPositionY = height/4 + 500;

  bob1  = new bob(startBobPositionX-40*2,startBobPositionY,40);
  bob2  = new bob(startBobPositionX-40,startBobPositionY,40);
  bob3  = new bob(startBobPositionX-39,startBobPositionY,40);
  bob4  = new bob(startBobPositionX-38,startBobPositionY,40);
  bob5  = new bob(startBobPositionX-37,startBobPositionY,40);

  roof1 = new roof(width/2,height/4,width/7,25);
  
  rope1 = new rope(bob1.body,roof1.body,-40*2,0);
  rope2 = new rope(bob2.body,roof1.body,-40*1,0);
  rope3 = new rope(bob3.body,roof1.body,-40*0,0);
  rope4 = new rope(bob4.body,roof1.body-39*1,0);
  rope5 = new rope(bob5.body,roof1.body-39*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
 // bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
 // rope4.display();
  rope5.display();

  drawSprites();
 
}



