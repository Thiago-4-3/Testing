var Steve,Steveimg;
var Bob,Bobimg;
var Germery,Germeryimg;
var Alex,Aleximg;
var Sarah, Sarahimg;
var Emily, Emilyimg;
var John,Johnimg;
var Guilbert, Guilbertimg;
var playsound;
var gameoversound;
var gameoverImg;
var Restartimg;
var x=0.3;
var VirusGroup;
var CellImage;
var Virus1img;
var Virus2img;
var Virus3img;

var edges;

function preload(){

Virus1img=loadImage("Virus1.jpg");
Virus2img=loadImage("Virus2.jpg");
Virus3img=loadImage("Virus3.jpeg");
gameoverImg=loadImage("gameOver.png");
Restartimg = loadImage("restart.png");
CellImage = loadAnimation("sprite_02.png","sprite_11.png","sprite_02.png","sprite_11.png");
}
function setup(){
createCanvas(1000,1000);

Steve = createSprite(250,130,10,20);
Steve.addImage(Virus1img);
Bob = createSprite(550,230,10,20);
Bob.addImage(Virus2img);
Germery = createSprite(720,150,10,20);
Germery.addImage(Virus3img);

Bob.scale=0.2;
Germery.scale=0.2;
Steve.scale=0.2;

Restart = createSprite(500,600,10,10);
Restart.addImage(Restartimg);
Restart.visible=false;
gameover = createSprite(500,500,10,10)
gameover.addImage(gameoverImg);
gameover.visible=false;
VirusGroup = createGroup();
VirusGroup.add(Steve);
VirusGroup.add(Bob);
VirusGroup.add(Germery);

Cell = createSprite(250,350,10,10);
Cell.addAnimation("Cell",CellImage);
Cell.scale=0.3;

edges=createEdgeSprites();

Steve.velocityX=3;
Steve.velocityY=4;

Bob.velocityX=3;
Bob.velocityY=4;

Germery.velocityX=3;
Germery.velocityY=4;
Bob.debug=true;
Cell.debug=true;
}
function draw(){
background("white");

if(keyDown("w")){
Cell.velocityX = 0;
Cell.velocityY = -3;
}
if(keyDown("s")){
    Cell.velocityX = 0;
    Cell.velocityY = 3;
    }
    if(keyDown("a")){
        Cell.velocityX = -3;
        Cell.velocityY = 0;
        }
        if(keyDown("d")){
            Cell.velocityX = 3;
            Cell.velocityY = 0;
            }

if(Cell.collide(Bob)){
Bob.destroy();
x=x+0.1
Cell.scale=x;
VirusGroup.remove(Bob)
}
if(Cell.collide(Steve)){
Steve.destroy();
x=x+0.1
Cell.scale=x;
VirusGroup.remove(Steve)
}
if(Cell.collide(Germery)){
    Germery.destroy();
    x=x+0.1
    Cell.scale=x;
    VirusGroup.remove(Germery)
    }     
    
    if(VirusGroup.contains(Bob)||VirusGroup.contains(Steve)||VirusGroup.contains(Germery) ){

    }else{
    gameover.visible=true
    Restart.visible=true 
    Cell.velocityX=0;   
    Cell.velocityY=0;   
    Cell.x = 10;
    Cell.y = 10;
    }

Steve.bounceOff(edges);
Bob.bounceOff(edges);
Germery.bounceOff(edges);
Cell.bounceOff(edges);
drawSprites();
}