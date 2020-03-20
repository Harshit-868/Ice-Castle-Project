const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var ground, bodyRect, terrace;
var leftWindow, rightWindow, leftTower, rightTower;
var head1, head2, head3, flagpole, flag;
var door, doorknob;

function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new rectangle(400, 375, 625, 25);
  bodyRect = new rectangle(400, 287.5, 350, 150);
  terrace = new rectangle(400, 205, 550, 15);

  leftWindow = new rectangle(187.5, 125, 30, 40);
  rightWindow = new rectangle(612.5, 125, 30, 40);
  leftTower = new rectangle(187.5, 225, 75, 275);
  rightTower = new rectangle(612.5, 225, 75, 275);

  head1 = new rectangle(400, 190, 150, 15);
  head2 = new rectangle(400, 175, 125, 15);
  head3 = new rectangle(400, 160, 100, 15);

  flagpole = new rectangle(400, 115, 5, 75);
  flag = new rectangle(427.5, 97.5, 50, 30);

  door = new rectangle(400, 322.5, 50, 80);
  doorknob = new rectangle(415, 322.5, 5, 5);
}

function draw() {

  background(rgb(0, 0, 50));
  Engine.update(engine);
  
  ground.display();
  bodyRect.display();
  leftTower.display();
  rightTower.display();
  terrace.display();

  leftWindow.display();
  rightWindow.display();

  head1.display();
  head2.display();
  head3.display();

  flagpole.display();
  flag.display();

  door.display();
  doorknob.display();
}