
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var world;
var groundObj;
var leftSide;
var rightSide;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);
	background(200);
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	};

	var ground_options={
		isStatic:true
	};

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200, 500, 30, ball_options);
	World.add(world, ball);
	Engine.run(engine);
  
	groundObj = new Ground(750, 790, 1500, 20);
	leftSide = new Ground(1100, 720, 20, 120);
	rightSide = new Ground(1300, 720, 20, 120);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ellipse(ball.position.x, ball.position.y, 30);
  drawSprites();
  groundObj.display();
  leftSide.display();
  rightSide.display();
  keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x: ball.position.x, y: ball.position.y},{x: 2, y: -10});
	}
}

