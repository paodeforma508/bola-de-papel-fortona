
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var chao
var lixeira_esquerda
var lixeira_direita
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	var ball_options={
	 isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
	}

	//Create the Bodies Here.
ball=Bodies.circle(260,100,20,ball_options)
World.add(world,ball)
	Engine.run(engine);
  chao=new ground(width/2,670,width,20)
lixeira_esquerda=new ground(1100,600,20,120)
lixeira_direita=new ground(1350,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ellipse(ball.position.x,ball.position.y,40,40);
 chao.display()
 lixeira_esquerda.display()
 lixeira_direita.display()
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


