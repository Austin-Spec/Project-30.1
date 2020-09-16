
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, ground2
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19
var hex1, slingShot;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(550,600,300,20)
	ground2 = new Ground(950,350,300,20)

	box1 = new box(425,560,40,50)
	box2 = new box(469,560,40,50)
	box3 = new box(513,560,40,50)
	box4 = new box(557,560,40,50)
	box5 = new box(600,560,40,50)
	box6 = new box(642,560,40,50)
	box7 = new box(470,505,40,50)
	box8 = new box(515,505,40,50)
	box9 = new box(560,505,40,50)
  box10 = new box(605,505,40,50)
  box11 = new box(515,450,40,50)
  box12 = new box(560,450,40,50)
  box13 = new box (535,395,40,50)

  box14 = new box(910,310,40,50)
  box15 = new box(955,310,40,50)
  box16 = new box(1000,310,40,50)
  box17 = new box(930,260,40,50)
  box18 = new box(980,260,40,50)
  box19 = new box(955,200,40,50)

  hex1 = new hex (150,520,50,40)
 
  slingshot = new SlingShot(hex1.body,{x:150, y:520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,277);
  ground1.display();
  ground2.display();


 // console.log("123;"+hex1.radius)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();  
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  hex1.display();
  slingshot.display();
  drawSprites();
 
}

function mouseDragged () {
  Matter.Body.setPosition(hex1.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  slingshot.fly()
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(hex1.body, {x:150, y:520})
      slingshot.attach(hex1.body);
  }
}

