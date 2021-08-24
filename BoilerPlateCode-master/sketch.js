var player
var wormGroup
var score=0
function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
   player=createSprite(100,100,20,20)
   wormGroup=new Group()
  
}

function draw() {
  background("black");
  
  player.x=mouseX
  player.y=mouseY
  stroke("red")
  ellipse(300,300,50,30)

if(player.x>250 && player.x<350 && player.y>250 && player.y<350
  ){
    text("No Cheating",200,200)
    player.x=30
    player.y=30
  }



  
  worm()
  for(var i=0;i<(wormGroup).length;i++){
    var temp=(wormGroup).get(i)
    if(player.isTouching(temp)){
      temp.destroy()
      temp=null;
      score++;
    }
      
  }







  drawSprites()
  textSize(15)
  fill("blue")
  stroke("blue")
  text("Your Score"+score,200,50)
  

  
  
}


function worm(){
  if(frameCount%30==0){
  var worm=createSprite(300,300,40,5)
  worm.shapeColor="green"
  worm.velocityX=random(-5,5)
  worm.velocityY=random(-5,5)
  wormGroup.add(worm)
  }

}
