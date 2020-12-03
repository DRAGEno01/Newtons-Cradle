
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1
var bob2
var bob3
var bob4
var bob5
var roofObject
var r1
var r2
var r3
var r4
var r5 
var world

function setup() {
	createCanvas(1600, 700); //big boi
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
	roofObject = new roof(width/2,height/4,width/7,20)
	bobDiameter=40
	startBobPositionX=width/2
	startBobPositionY=height/4+500
	bob1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)
	bob5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter)
	bob2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter)
	bob3=new bob(startBobPositionX,startBobPositionY,bobDiameter)
	bob4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter)
	

	var render = Render.create({
		element: document.body,
		engine:engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	});
	r1=new rope(bob1.body,roofObject.body,-bobDiameter*2,0)
	r2=new rope(bob2.body,roofObject.body,-bobDiameter*1,0)
	r3=new rope(bob3.body,roofObject.body,0,0)
	r4=new rope(bob4.body,roofObject.body,bobDiameter*1,0)
	r5=new rope(bob5.body,roofObject.body,bobDiameter*2,0)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roofObject.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}
function drawLine(constraint){
bobBodyPosition=constraint.bodyA.position
roofBodyPosition=constraint.bodyB.position

roofBodyOffset=constraint.pointB
roofBodyX=roofBodyPosition.x+roofBodyOffset.x
roofBodyY=roofBodyPosition.y+roofBodyOffset.y

line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY)
}


