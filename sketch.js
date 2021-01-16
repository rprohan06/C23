const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myworld,myengine;
var ground,ball,box1;

function setup() {
  createCanvas(400,400);

  myengine=Engine.create();
  myworld=myengine.world;
  ground=new Ground(200,350,400,50)
  


 

 box1=new Box(200,200,50,50);
 box2=new Box(230,100,50,100)
 
}

function draw() {
  background(180,180,180); 
  Engine.update(myengine); 
 
 box1.display();
 box2.display();
 console.log(box2.body.angle);
 ground.display();
}