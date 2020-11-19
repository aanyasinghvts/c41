class umbrella{
    constructor(x,y){
     options = {
        'isStatic': true
     }
     this.body = Bodies.circle(x, y, radius);
        this.radius= 10;
        this.image = loadImage("Umbrella.jpg");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,10,10,this.width, this.height);
        pop();
      }
    }