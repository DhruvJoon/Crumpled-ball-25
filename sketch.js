
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var ground;
var paper;
var dustbin;
var edges;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,650,800,20);
	paper = new Paper(200,400,50);
	dustbin= new Dustbin(600,630);

	edges = createEdgeSprites();
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  

 

  ground.display();
  paper.display();
  dustbin.display();
  
  //drawSprites();
 
}


function keyPressed(){
	if(keyCode==UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:100, y:-200})
	}
}


