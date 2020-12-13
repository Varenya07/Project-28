
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var mango1,mango2,mango3,mango4,mango5
var stone


function preload()
{
	boy_pic = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,685,800,20)

	tree = new Tree(625,350,10,10)

	mango1 = new Mango(580,180,50,50);
	mango2 = new Mango(550,280,50,50)
	mango3 = new Mango(650,80,50,50)
	mango4 = new Mango(700,205,50,50)
	mango5 = new Mango(770,295,50,50)

	boy = Bodies.rectangle(100,300,50,150)

	stone = new Stone(130,420,40,40)

	rope = new Rope(stone.body,{x:130,y:420})

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(243);

  if(keyCode === "space") {
	rethrow();
  }
	
  image(boy_pic,boy.position.x,boy.position.y,150,450)

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  rope.display();
  stone.display();
  

  collision(stone,mango1);
  collision(stone,mango2);
  collision(stone,mango3);
  collision(stone,mango4);
  collision(stone,mango5);

  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY})
}


function mouseReleased() {
	rope.fly();
}

function collision(stone,mango1) {
MangoBodyPosition = mango1.body.position
StoneBodyPosition = stone.body.position

var distance = dist(StoneBodyPosition.x,StoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y)
if(distance<=mango1.width/2 + stone.width/2) {
	Matter.Body.setStatic(mango1.body,false)
}

}

function rethrow() {
	Matter.Body.setPosition(stone.body,{x:130,y:420});
		rope.attach(stone.body);
}




