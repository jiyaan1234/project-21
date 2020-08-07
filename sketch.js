var bullets, wall;
var speed,thickness,weight;
function setup() {
  createCanvas(1800,400);
  speed=random(223,321);
  weight=random(30,52);
  car = createSprite(50,200,50,50);
  wall = createSprite(1200,200,20,100);
  thickness=random(22,83);

  wall.shapeColor = color (80,80,80);
}

function draw() {
  background(0);  
  car.velocityX=speed;

  if (hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed(thickness * thicknes * thickness);

    if (damage>10)(

      wall.shapeColor=color(255,0,0) ;

    }

    if (<10)

    {

      wall.shapeColor=color(0,225,0);
    }






 



  drawSprites();
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if bulletRightEdge>=wallLeftEdge){
    return true;
  
  }

  return false;

}