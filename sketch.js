const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImg;
var snow1,snow2,snow3,snow4,snow6,snow7,snow8,snow9,snow10;

function preload(){
backgroundImg = loadImage("snow1.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  snow1 = new Snow(100,0,20,20)
  snow2 = new Snow(150,0,20,20)
  snow3 = new Snow(200,0,20,20)
  snow4 = new Snow(250,0,20,20)
  snow5 = new Snow(300,0,20,20)
  snow6 = new Snow(350,0,20,20)
  snow7 = new Snow(300,0,20,20)
  snow8 = new Snow(450,0,20,20)
  snow9 = new Snow(500,0,20,20)
  snow10 = new Snow(550,0,20,20)

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine)
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
}