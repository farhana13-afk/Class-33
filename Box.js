class Box {
  constructor(x, y){
  var options= {
    'isStatic':false,
		'restitution':0,
		'friction':1,
		'density':5
  }
  this.width = 50;
  this.height = 50;
  this.body = Bodies.rectangle(x,y, this.width, this.height, options);
  World.add(world,this.body);
  }
display(){
    var pos = this.body.position
    var angle = this.body.angle
    
    push ();
    translate(pos.x, pos.y);
    rotate (angle);
    fill ("blue");
    noStroke();
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop ();
}
};
