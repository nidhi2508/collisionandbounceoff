var fixedRect, movingRect,fixedRect2, fixedRect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 50);
  fixedRect2 = createSprite(500, 200, 50, 80);
  fixedRect3 = createSprite(100, 400, 50, 80);

  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";

  console.log("test");
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = mouseY;

  
  if(isTouching(movingRect, fixedRect2) ){
   fixedRect2.shapeColor = "red";
   movingRect.shapeColor = "red";
   fixedRect.shapeColor = "red";
   fixedRect3.shapeColor = "red";
  }else if(isTouching(movingRect, fixedRect)){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";
    fixedRect3.shapeColor = "green";
  }else if(isTouching(movingRect, fixedRect3)){
    fixedRect3.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
    fixedRect2.shapeColor = "yellow";
  }
  
  else{
    fixedRect2.shapeColor = "blue";
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
    fixedRect3.shapeColor = "blue";
  }
 
  drawSprites();
}

