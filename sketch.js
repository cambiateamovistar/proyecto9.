var box;
function setup() {
  createCanvas(400,400);
box = createSprite(200,200,10,10);
}

function draw() 
{
  background ("green");
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
    background("red");
  }
 
drawSprites();
}




