var fixedRect, movingRect;
var obj1, obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(100, 400, 50, 80);
  obj1.shapeColor = "green";
  obj1.debug = true;
  obj2 = createSprite(1000, 400,80,30);
  obj2.shapeColor = "green";
  obj2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  obj1.velocityX = 5;
  obj2.velocityX = -5;


  
  var z = add(4782374,23498564);
  console.log(z);
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,fixedRect);
  bounceOff(obj1,obj2);

  drawSprites();
}

function add(a, b){
  sum = a+b;
  return sum;
}
