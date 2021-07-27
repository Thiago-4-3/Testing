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
var x=100;
var y=100;

function preload(){
gameoverimg = loadImage("gameOver.png");
Restartimg = loadImage("restart.png");
Virus1img = loadImage("Virus_1.jpg");
Virus2img = loadImage("Virus_2.jpg");
Virus3img = loadImage("Virus_3.jpeg");
CellImage = loadAnimation("sprite_02.png", "sprite_11.png");
}
function setup(){
createCanvas(500,500);
Steve = createSprite(x+20,y+30,10,20);
Steve.addImage("Virus1",Virus1img);
Bob = createSprite(x+230,y+30,10,20);
Bob.addImage("Virus2",Virus2img);
Germery = createSprite(x+120,y+900,10,20);
Germery.addImage("Virus3",Virus3img);
Alex = createSprite(x+10,y+40,10,20);
Sarah = createSprite(x+270,y+340,10,20);
Emily = createSprite(x+20,y+330,10,20);
John = createSprite(x+230,y+310,10,20);
Guilbert = createSprite(x+120,y+330,10,20);

Cell = createSprite(250,250);
Cell.addAnimation("Cell",CellImage);
}
function draw(){
background("white");
drawSprites()
}