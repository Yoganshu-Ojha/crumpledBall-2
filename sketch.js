const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,
  world,
  ground,
  ball,
  background_image,
  containerground,
  containerwall1,
  containerwall2,
  ball__img,
  dustbin,
  dustbin_img;

function preload() {
  background_image = loadImage("hello.png");

  dustbin_img = loadImage("dustbingreen.png");
}

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(400, 400, 800, 10, ground_options);
  World.add(world, ground);

  ball = new BOB1(100,200,20);

  var containerground_options = {
    isStatic: true,
  };

  containerground = Bodies.rectangle(
    550,
    395,
    100,
    10,
    containerground_options
  );

  World.add(world, containerground);

  var containerwall1_options = {
    isStatic: true,
  };

  containerwall1 = Bodies.rectangle(500, 360, 10, 150, containerwall1_options);

  World.add(world, containerwall1);

  var containerwall2_options = {
    isStatic: true,
  };

  containerwall2 = Bodies.rectangle(600, 360, 10, 150, containerwall2_options);

  World.add(world, containerwall2);

  dustbin = createSprite(550,325,100,150);
  dustbin.addImage(dustbin_img);
  dustbin.scale = 0.45;

}

function draw() {
  background(background_image);
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 10);

  rectMode(CENTER);
  rect(containerground.position.x, containerground.position.y, 100, 10);

  rectMode(CENTER);
  rect(containerwall1.position.x, containerwall1.position.y, 10, 150);

  rectMode(CENTER);
  rect(containerwall2.position.x, containerwall2.position.y, 10, 150);

  keyPressed();

  ball.display();

  drawSprites();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-20}); 
 } 
}
