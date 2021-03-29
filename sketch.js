const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var bottle1;




function setup() {
 createCanvas(windowWidth-50,windowHeight-100);

engine = Engine.create();
world = engine.world;

bottle = new Bottle(200,200);
}

function draw() {
 background(0); 

Engine.update(engine);

bottle.display();




 drawSprites();

}
