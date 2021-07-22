var boy;
var track;
var leftBoundary;
var rightBoundary;
function preload()
{
  track.loadImage("path.png");
  boy.loadAnimation("Runner-1.png","Runner-2.png");
}

function setup()
{
  createCanvas(400, 400);
  var leftBoundary = createSprite(5, 5, 5, 400);
  var rightBoundary = createSprite(395 , 195, 5, 400);
}

function draw() 
{
  background(0);
leftBoundary.visible = false;
rightBoundary.visible = false;
boy.x = mouseX;
boy.collide(leftBoundary);
boy.collide(rightBoundary);
}

function track()
{
  var track = createSprite(200, 200, 400, 200);
  track.velocityY = 5;
  if (track.y > 495)
  {
  track.y = 5;
  }
}

function boy()
{
 var boy = createSprite(200, 200, 5, 8);
 boy.loadImage(boy.loadAnimation);

}

