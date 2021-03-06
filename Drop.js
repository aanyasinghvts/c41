class Drop{
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push(); 
        translate(this.body.position.x, this.body.position.y); 
        strokeWeight(4); 
        stroke("blue"); 
        fill("blue"); 
        ellipseMode(CENTER); 
        ellipse(this.x,this.y,this.radiusX,this.radiusY); 
        pop();
      }
}
