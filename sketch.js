var backg,bgPic,cat,catPic,catPic2,catPic3,mouse,mousePic,mousePic2,mousePic3;

function preload() {
    bgPic = loadImage("images/garden.png");
    catPic = loadImage("images/cat1.png");
    catWalk = loadImage("images/cat2.png");
    catStand = loadImage("images/cat4.png");
    mousePic = loadImage("images/mouse1.png");
    mouseHappy = loadImage("images/mouse2.png");
    mouseTease = loadImage("images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
  
    //making the garden
  backg = createSprite(500, 400, 380,380)
  backg.addImage("background",bgPic)
  backg.scale=1.15

  //making tom the cat
  cat = createSprite(850, 700, 30,30)
  cat.addImage("cat",catPic)
  cat.scale=0.15;

  //making jerry the mouse
  mouse = createSprite(100, 650, 30,30)
  mouse.addImage("mouse",mousePic)
  mouse.scale=0.18;
  
}

function draw() {

    background(180);

    //Write condition here to evalute if tom and jerry collide

  if(cat.x < 250){
    keyPressed();
    mouse.addImage("mouseHap",mouseHappy);
    mouse.changeImage("mouseHap");
    cat.addImage("catHappy",catStand);
    cat.changeImage("catHappy");
    cat.velocityX = 0
  }
    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addImage("mouseTea",mouseTease);
      mouse.changeImage("mouseTea");
      mouse.frameDelay = 25;
      cat.addImage("catRunning",catWalk);
      cat.changeImage("catRunning");
      cat.velocityX = -5
      cat.scale=0.25
      cat.y=675
  }
}