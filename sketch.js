
var balloon,balloonI;
var backgroundI
var database,pos;

function preload()
{
backgroundI = loadImage("bg.png");
balloonI = loadImage("balloon1.jpeg")
}

function setup() {

  database = firebase.database();

  createCanvas(1000,1000);

  

  balloon = createSprite(400, 200, 50, 50);
  balloon.addImage(balloonI);

  var balloonpos = database.ref('balloon/position');
  balloonpos.on ("value",readPosition);

}

function draw() {
  background(backgroundI);  

  if(pos!==undefined)
  {
  
  

  if(keyDown(LEFT_ARROW)){
      writePosition(-5,0);
  }
  else if(keyDown(RIGHT_ARROW)){
      writePosition(5,0);
  }
  else if(keyDown(UP_ARROW)){
      writePosition(0,-5);
  }
  else if(keyDown(DOWN_ARROW)){
      writePosition(0,+5);
  }

  drawSprites();
}
}
function writePosition(x,y){

  database.ref('balloon/position').set({
      'x':pos.x+x,
      'y':pos.y+y
  })

 // ball.x = ball.x + x;
 // ball.y = ball.y + y;

  
}

function readPosition(data)
{
pos = data.val();
balloon.x = pos.x;
balloon.y = pos.y;   

}