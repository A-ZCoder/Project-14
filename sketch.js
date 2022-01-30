var godzilla, god, rodan, city, lazer, mothra, leo;
var godzillaImg, rodanImg, cityImg, godImg, lazerImg, mothraImg, leoImg;
var box;
var boxImg;
var mecha;
var mechaImg;
var  score = 0;
var lazerGroup, leoGroup, rodanGroup, mothraGroup, mechaGroup;
var monsterGroup;
var kill = 0;
var life= 1;
var border;
var ho;
var hoImg;
var back;
var backImg;

var restart;

var gameState = "serve";

function preload() {
cityImg = loadImage("City.jpg");
godzillaImg = loadImage("Godzilla (mouth closed).png");
godImg = loadImage("Godzilla (mouth opened).png");

rodanImg = loadImage("Rodan.png");
mothraImg = loadImage("Mothra brown.png");
leoImg = loadImage("Mothra Blue.png");

lazerImg = loadImage("Lazer.png");

mechaImg = loadImage("gho.png");

hoImg = loadImage("play.png");

backImg = loadImage("paper.jpg");
}



function setup() {
createCanvas(1010,600);

//City
city = createSprite(230,240,100,600);
city.addImage(cityImg);
city.scale=0.950;

//Godzilla
godzilla = createSprite(1000,530,10,10);
godzilla.addImage(godzillaImg);
godzilla.scale = 0.500;
godzilla.mirrorX(-1);




box = createSprite(870,390,30,30);
box.visible=false;

life = 1;
kill = 0;
score = 0;
lazerGroup= new Group();
leoGroup= new Group();
rodanGroup= new Group();
mothraGroup= new Group();
mechaGroup= new Group();

monsterGroup= new Group();


border = createSprite(1018,300,10,1000);
border.visible =false;

back = createSprite(500,270,500,500);
back.addImage(backImg);
back.scale = 1;

ho= createSprite(470, 520)
  ho.addImage(hoImg);
  ho.scale = 0.4;
}



function draw() {
background(0);

if(godzilla.y<20) {
godzilla.remove();
box.remove();
}

if(godzilla.y<6) {
  godzilla.remove();
  box.remove();
}


if (keyDown("space")) {
createLazer();
}

if(keyDown("up")) {
godzilla.y = godzilla.y-3;
box.y=box.y-3;
}

if(keyDown("down")) {
godzilla.y = godzilla.y+3;
box.y = box.y+3;
}



var select_sprite = Math.round(random(1,4));
var select_sprite = Math.round(random(1,4));
var select_sprite = Math.round(random(1,4));
var select_sprite = Math.round(random(1,4));

if(World.frameCount % 95 === 0) {
  if(select_sprite == 1) {
    createMothraB();
  } else if(select_sprite == 2) {
    createRodan();
  } else if(select_sprite == 3) {
    createMeca();
  } else (select_sprite == 4) 
    createLeo();
  }

  if(World.frameCount % 550 === 0) {
    if(select_sprite == 1) {
      createMothraB();
    } else if(select_sprite == 2) {
      createLeo();
    } else if(select_sprite == 3) {
      createRodan();
    } else (select_sprite == 4) 
    createMeca();
    }

    
    if(lazerGroup.isTouching(leoGroup)) {
      leoGroup.destroyEach();
      lazerGroup.destroyEach();
      score = score+1;
      kill = kill+1
    }

    if(lazerGroup.isTouching(rodanGroup)) {
      rodanGroup.destroyEach();
      lazerGroup.destroyEach();
      score = score+2;
      kill = kill+1
    }

    if(lazerGroup.isTouching(mechaGroup)) {
      mechaGroup.destroyEach();
      lazerGroup.destroyEach();
      lazerGroup.collide(mechaGroup);
      score = score+3;
      kill = kill+1;
    }

        if(lazerGroup.isTouching(mothraGroup)) {
      mothraGroup.destroyEach();
      lazerGroup.destroyEach();
      score = score+2;
      kill = kill+1;
    }


  if(monsterGroup.isTouching(godzilla)) {
    godzilla.remove();
    life = life-1;
  }

  if(monsterGroup.isTouching(border)) {
    life =life-1;
  }

    if(life < 1) {
      lazerGroup.destroyEach();
      box.remove();
      godzilla.destroy();
      monsterGroup.destroyEach();
    }


    if(score > 70) {
      lazerGroup.destroyEach();
  monsterGroup.destroyEach();
    }





drawSprites();
textSize(27);
fill ("white");
textFont("italics")
text("Score: "+ score, 885, 50);

textSize(25);
textFont("bold");
fill ("red")
text("KILLS:"+ kill, 885, 75);

textSize(28);
textFont("bold");
fill ("yellow");
text("Lives: "+ life, 885, 100);

if(score > 70) {
  textSize(50);
  fill("orange")
  textFont("bold")
  text("You Saved the City", 350,250);
}

if(score > 70) {
  textSize(35);
  textFont("bold");
  fill ("red");
  text("KILLS:"+ kill, 450, 350);
}

if(score > 70) {
  textSize(35);
  textFont("bold");
  fill("yellow");
  text("Score: "+ score, 460,400)
}

if(life < 1) {
  textSize(50);
  fill("red")
  textFont("bold")
  text("The Monsters Defeated You", 285,300);
}
if(life<1) {
  textSize(35);
  textFont("bold");
  fill("yellow");
  text("Score: "+ score, 460,400)
}
if(life<1) {
  textSize(35);
  textFont("bold");
  fill ("red");
  text("KILLS:"+ kill, 450, 350);
}

if(gameState == "serve") {
  textSize(35);
  fill ("crimson")
  text("Press 'Spacebar' to shoot lazers to kill monsters", 200, 200);
  textSize(35);
  fill ("crimson")
  text("Don't let them hit you or get to the other city", 200, 250);
  textSize(35);
  fill ("crimson")
  text("Use Arrow keys to move", 330, 300);
  textSize(35);
  fill ("crimson")
  text("Click 'Play' to continue", 330, 400)
  textSize(35);
  fill ("crimson")
  text("Good Luck", 370, 450);
  textSize(35);
  fill ("crimson")
  text("Get 70 points to win", 370, 350);
  lazerGroup.destroyEach();
  monsterGroup.destroyEach();
  monsterGroup.setVelocityXEach(0);
}
else 
{
gameState = "play"
}

if(mousePressedOver(ho)) {
  gameState = "play"
  ho.destroy();
  back.destroy();
}
 
}



function createLazer() {
  var lazer = createSprite(0,0,10,10);
  lazer.addImage(lazerImg);
  lazer.x = 770;
  lazer.y = box.y;
  lazer.scale= 0.050;
  lazer.velocityX = -4;
  lazer.lifetime = 255;
  lazerGroup.add(lazer);
  lazer.debug = false;
}


//Monsters


function createRodan() 
{
var rodan = createSprite(0,Math.round(random(-50, 370)), 10, 10);
rodan.addImage(rodanImg);
rodan.scale= 0.435;
rodan.velocityX = 4;
rodan.lifetime = -1;
rodanGroup.add(rodan)
rodan.debug = false;
monsterGroup.add(rodan)
back.depth = rodanGroup.depth;
rodanGroup.depth = back.depth+1;
}


function createMeca()  {
    mecha = createSprite(0,Math.round(random(-50, 370)), 100, 100);
    mecha.addImage(mechaImg);
    mecha.scale=0.6;
    mecha.velocityX = 4;
     mecha.lifetime = -1;
     mechaGroup.add(mecha);
     leoGroup.depth = mecha.depth;
    mecha.depth = mecha.depth+1;
    mecha.debug= false;
    mecha.setCollider("circle", 50 , 50, 170);
    monsterGroup.add(mecha);
    back.depth = mechaGroup.depth;
mechaGroup.depth = back.depth+1;
}



function createMothraB() {
  var mothra = createSprite(0,Math.round(random(-50, 370)), 10, 10);
  mothra.addImage(mothraImg);
  mothra.scale = 0.2;
  mothra.mirrorX(-1);
  mothra.velocityX = 4;
  mothra.lifetime = -1;
  mothraGroup.add(mothra)
  leoGroup.depth = mothraGroup.depth;
  mechaGroup.depth = mothraGroup.depth+1
  mothra.debug =false;
  monsterGroup.add(mothra);
  back.depth = mothraGroup.depth;
mothraGroup.depth = back.depth+1;
}


function createLeo() {
  var leo = createSprite(0,Math.round(random(-50, 370)), 10, 10);
  leo.addImage(leoImg);
  leo.scale = 0.400;
  leo.mirrorX(-1);
  leo.velocityX = 4;
  leo.lifetime = -1;
  leoGroup.add(leo);
  leoGroup.depth = mechaGroup.depth;
    mechaGroup.depth = mechaGroup.depth+1;
    leoGroup.depth = mothraGroup.depth;
  mechaGroup.depth = mothraGroup.depth+1
  leo.debug= false;
  monsterGroup.add(leo);
  back.depth = leoGroup.depth;
leoGroup.depth = back.depth+1;
}


