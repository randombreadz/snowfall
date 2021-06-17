var snow, snowImg, snowG;
var background, backgroundImg, bg;
var girl, girlImg;
var mom, momImg;
var wall;
var wood, woodImg;

function preload() {
  backgroundImg = loadImage("snow1.jpg");
  girlImg = loadImage("snowgirl.png");
  momImg = loadImage("snowmom.png");
  snowImg = loadImage("snow5.webp");
  woodImg = loadImage("wood.jpg");
}

function setup() {
  createCanvas(1200,800);

  wood = createSprite(600, 400, 50, 50);
  wood.addImage(woodImg);
  wood.scale = 0.7

  wall = createSprite(600, 400, 550, 800)

  bg = createSprite(600, 400, 400, 400);
  bg.addImage(backgroundImg);

  girl = createSprite(750, 450, 50, 50);
  girl.addImage(girlImg);
  girl.scale = 0.1;

  mom = createSprite(440, 430, 50, 50);
  mom.addImage(momImg);
  mom.scale = 0.12;

  snowG = new Group();
}

function draw() {
  background(255,255,255);  

  createSnow();
  drawSprites();
}

function createSnow() {
  if (World.frameCount % 60 == 0) {
  var snow = createSprite(Math.round(random(850, 360),0, 0, 0));
  snow.addImage(snowImg);
  snow.scale=0.12;
  snow.velocityY = 3;
  snow.lifetime = 175;
  }
}