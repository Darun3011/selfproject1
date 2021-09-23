var cube;
var ground;
var backgroundimg1;

function preload(){

backgroundimg1 = loadImage("images/backgroundimagelevel1.png");


}

function setup() {
  createCanvas(800, 600);

ground = createSprite(400,600,800,50);

cube =createSprite(200,550,30,30);
}
function draw() {
  background(backgroundimg1);

 console.log(cube.y); 
if(keyDown('space') && cube.y > 500){

cube.velocityY = cube.velocityY - 5;

}
cube.velocityY = cube.velocityY + 0.8;

cube.collide(ground);

drawSprites();  
}
