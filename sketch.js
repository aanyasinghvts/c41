var umbrella1,lightning,thunder1,thunder2,thunder3,thunder4;
var maxDrops= 100;

function preload(){
   thunder1= loadImage("images/thunderbolt/1.png");
   thunder2= loadImage("images/thunderbolt/2.png");
   thunder3= loadImage("images/thunderbolt/3.png");
   thunder4= loadImage("images/thunderbolt/4.png");
}

function setup(){
createCanvas(400,700);
umbrella1= createSprite(200,650);

for (var i=0; i<maxDrops; i++){
    drops.push(new createDrop(random(0,400), random(0,400)));
}

if(this.rain.position.y> height){
    Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
}
}

lightning= createSprite(200,350,20,100);
var rand = Math.round(random(1,4));
switch(rand) {
  case 1: lightning.addImage(thunder1);
          break;
  case 2: lightning.addImage(thunder2);
          break;
  case 3: lightning.addImage(thunder3);
          break;
  case 4: lightning.addImage(thunder4);
          break;
  default: break;
  }

function draw(){
background(0);
umbrella1.display();
lightning.display();

for (var i = 0; i <maxDrops; i++) {
   
    drops[i].display();
  }

}   

