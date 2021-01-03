class Ball{
    constructor(x,y){
var options={
    'isStatic':false,
    'restitution':0,
    'friction':1,
    'density':10
}
this.body = Bodies.circle(x,y, 60, options);
this.r = 60;
World.add(world, this.body); 
}
display(){
    var pos = this.body.position
    var angle = this.body.angle

    push ();
    translate(pos.x, pos.y);
    rotate (angle);
    noStroke();
    fill ("grey");
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r);
    pop ();
}

  
}