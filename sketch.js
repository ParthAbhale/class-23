const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box1,box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    box1=new Box(200,300,50,50);
    box2= new Box(240,100,50,50);
    ground = new Ground(200,390,400,10)

   // console.log(ground);
}



function draw(){
    background("grey");
    Engine.update(myEngine);

    box1.display();
    box2.display();
    ground.display();

    console.log(box1.body.position.x)
    
}