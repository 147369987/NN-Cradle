
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	bob1 = new bob(320,575,40)
	bob2 = new bob(360,575,40)
	bob3 = new bob(400,575,40);
	bob4 = new bob(420,575,40);
	bob5 = new bob(460,575,40);
	
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope(bob3.body,roofObject.body,-8, 0)
	rope4=new rope(bob4.body,roofObject.body,25, 0)
	rope5=new rope(bob5.body,roofObject.body,60, 0)
	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  fill ("lightgreen")
    textSize(30)
    
     
	 text("PRESS LEFT ARROW ◀ TO MOVE FIRST BOB" , 10 , 120);
	 text("PRESS RIGHT ARROW ▶ TO MOVE LAST BOB" , 10 , 170);
	 fill ("YELLOW")
	 textSize(50)
    
     text ("NEWTON’S CRADLE" , 10 , 70);
	 textSize(25)
	 text ("Presented 🙏" ,580 , 530);
	 text ("By Niraaghan S" , 580 , 570);
	
  
}

function keyPressed() { 
	if (keyCode === LEFT_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-55,y:-45}); } 

	if (keyCode === RIGHT_ARROW) 
	{ Matter.Body.applyForce(bob5.body,bob5.body.position,{x:55,y:45}); } 


}






