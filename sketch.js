var tom,tomImage,jerry,jerryImage,backgroundImage
function preload() {
    //load the images here
    tomImage=loadImage("images/tomOne.png");
    jerryImage=loadImage("images/jerryOne.png");
    backgroundImage=loadImage("images/garden.png");
    
}

function setup(){
    createCanvas(1920,1080);

    //create tom and jerry sprites here
    tom=createSprite(1300,700);
    tom.addImage("tom",tomImage);
    tom.scale=0.5
    tom.addAnimation("tom",tomImage);//
    jerry=createSprite(250,800);
    jerry.addImage("jerry",jerryImage);
    jerry.scale=0.2
    //jerry.addAnimation("jerry",jerryImage);
    tom=loadAnimation("tomTwo.png","tomThree.png","tomFour.png");
}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
    tom.display();
    jerry.display();
    //keyPressed(); 
    drawSprites();
}


function keyPressed() {

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW) {
  tom.velocityX=-5;
  tom.addAnimation("tom",tom.png);
  tom.changeAnimation("tom");
  
 }
}

function collide() {
if(tom.x - jerry.x<(tom.width - jerry.width)/2) {   
tom.addAnimation("tom",tom);
}
}
