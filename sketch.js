const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var wall1;
var wall2;
var edge_left, edge_right, edge_top;

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;



	ground = new Ground(600, 490, 1200, 20);
	wall1 = new Ground(700, 490, 20, 300);
	wall2 = new Ground(950, 490, 20, 300);
	// edge_top = new Ground(600, 0, 1200, 5);
	// edge_right = new Ground(1200, 250, 5, 500);
	// edge_left = new Ground(0, 250, 5, 500);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	ball = Bodies.circle(75, 75, 30, ball_options);
	World.add(world, ball)
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
	background(0);

	ellipseMode(RADIUS);
	ellipse(ball.position.x, ball.position.y, 20, 20);

	ground.show();
	wall1.show();
	wall2.show();
	// edge_left.show();
	// edge_right.show();
	// edge_top.show();
	var i = 0;
	if (i >= 1) {
		keyPressed();
		i += 1;
	}
	Engine.update(engine);
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		console.log("Hii")
		Body.applyForce(ball,{x:0,y:0},{x:150,y:0});
	}
}