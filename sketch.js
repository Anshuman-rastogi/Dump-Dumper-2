var d1, d2, d3;
var dustbin, dustbinImage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var d11, d22, d33;

function preload(){
	dustbinImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1700, 650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700, 630, 1700, 15);

	paper = new Paper(150,550,30);

	d1 = createSprite(1316,520,20,190);
	d1.shapeColor="white";
	d11 = new Dustbin(1350,520,20,190);

	d2 = createSprite(1250,610,150,20);
	d2.shapeColor="white";
	d22 = new Dustbin(1250,610,150,20);

	d3 = createSprite(1183,520,20,190);
	d3.shapeColor="white";
	d33 = new Dustbin(1183,520,20,190);

	dustbin = createSprite(1250,525);
	dustbin.addImage(dustbinImage);
	dustbin.scale=0.6;

	Engine.run(engine);
  
}


function draw() {

  background(0);
  Engine.update(engine);
  
	ground.display();
	paper.display();
 
  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:90, y:-85});
	}
	
}
