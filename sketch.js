const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var e, w;
var object, ball;
function setup() {
  createCanvas(400,400);
  e=Engine.create();
  w=e.world;

  var object_options={
    isStatic: true
  }
  object=Bodies.rectangle(200, 390, 200, 20, object_options);
  World.add(w, object);
  
  var ball_options={
    restitution: 1.0
  }
  ball=Bodies.circle(200, 100, 20, ball_options);
  World.add(w, ball);
  console.log(ball);
}

function draw() {
  background(0, 0, 0); 
  Engine.update(e);
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}