//NameSpace
//Engine is used to create the Physics Engine
const Engine = Matter.Engine;
//World is used to create the physical World and add bodies to it
const World = Matter.World;
//Bodies is used to create the physical bodies which inhibits in the world
const Bodies = Matter.Bodies;

//create your own engine, world and bodies using the physics engine
var myEngine, myWorld;
//create the object
var ground, ball;


function setup()
{
  createCanvas(400,400);

  myEngine = Engine.create();

  //myWorld is my myEngine's world

  myWorld = myEngine.world;

  var groundOptions = {
    isStatic : true,
  }
  //create the object. This is the soul of the body
  ground = Bodies.rectangle(200,370,400,10,groundOptions);
  World.add(myWorld,ground);

  console.log(ground.position.y);
  console.log(ground.isStatic);

  var ballOptions = {

    restitution : 1,
  }

  //create ball
  ball = Bodies.circle(200, 100, 25, ballOptions);
  console.log(ball)
  World.add(myWorld, ball);


}

function draw()
{
    background("Black");
    Engine.update(myEngine);
    
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 10)
    //rect(200,200,50,50);
  //  circle(ball.position.x, ball.position.y, 28)
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 25, 25);

}