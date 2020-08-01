
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball, dustbin, ground, launcher;
function setup() {
	createCanvas(1200,700);
//	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ball = new Paper(200,100,70);
	 dustbin = new Dustbin(600,650);
	 ground =new Ground(width/2,684,width,50);

	 launcher = new Launcher(ball.body,{x: 200, y: 400});

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(230);
 // Engine.update(engine);
  
  ball.display();
  dustbin.display(); 
  ground.display();

  launcher.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:116,y:-112});
  
	}
}

function mouseDragged () {
    Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}

function mouseReleased () {
    launcher.fly();
}



