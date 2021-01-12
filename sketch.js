
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1;
var roof1;
var myrope;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new bob(50,60,70);
roof1 = new roof(width/2,100,300,50);

myrope=new rope(bob.body,roof1.body,20,80);


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("white");
  bob1.display();
  roof1.display();
  myrope.display();
 
  //drawSprites();
 
}



