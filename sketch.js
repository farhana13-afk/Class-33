const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
   var canvas = createCanvas(1200,700);
   engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,550,900, 10);
    //collumn 1
    box1 = new Box(500,500);
    box2 = new Box(500,450);
    box3 = new Box(500,400);
    box4 = new Box(500,350);
    box5 = new Box(500,300);
    box6 = new Box(500,250);
    box7 = new Box(500,200);
    box8 = new Box(500,150);
    //collum 2
    box9 = new Box(600,500);
    box10 = new Box(600,450);
    box11 = new Box(600,400);
    box12 = new Box(600,350);
    box13 = new Box(600,300);
    box14 = new Box(600,250);
   // collumn 3 
    box15 = new Box(700,500);
    box16 = new Box(700,450);
    box17 = new Box(700,400);
    box18 = new Box(700,350);
    box19 = new Box(700,300);
    box20 = new Box(700,250);
    //wrecking ball
    wball = new Ball(250, 450);
    // crane
    crane = new Chain(wball.body, {x:300, y:100});

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    wball.display();
    crane.display();
}

function mouseDragged(){
    Matter.Body.setPosition(wball.body, {x: mouseX, y: mouseY});
}

