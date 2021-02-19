var  wall, thickness;
var speed, weight, bullet, damage;

function setup() {
  createCanvas(1600, 400);
  thickness = random(22, 83);
  bullet = createSprite(100, 200, 45, 15);
  bullet.image=loadImage("yellow");

  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = color("80,80,80");

  speed= random(223,321);
  weight = random(30, 52);

  bullet.velocityX = speed;

}

function draw() {

  background("white");
  if(wall.isTouching(bullet)){
    bullet.velocityX = 0;

    damage = (0.5 * weight * speed * speed) / (thickness*thickness*thickness);

    if(damage > 12){
      wall.shapeColor = color("red");
      textStyle("bold");
      textSize(30);
      fill(130, 130, 255);
      text("Wall is rejected", 700, 150);
      text("Damage- "+Math.round(damage), 700, 200)
    }if(damage < 12){
      wall.shapeColor = color("green");
      textStyle("bold");
      textSize(30);
      fill(130, 130, 255);
      text("Wall is accepted", 700, 150);
      text("Damage- "+Math.round(damage), 700, 200)
  }
  drawSprites();
  }
}
function hascollided(lbullet, lwall){
  bulletRightEgde=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}