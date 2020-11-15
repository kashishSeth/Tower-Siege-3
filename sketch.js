const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var flag = 0;
var engine, world;
var box1, box2, box3, box4;
var box5, box6, box7, box8;
var box9, box10, box11, box12;
var box13, box14, box15, box16;
var backgroundImg;
var back;
var a=[]
var b=[]
var c=[]
var d=[]
var f=[]
var polygonImage;
var score = 0;

function preload(){
  getBackGroundImage();
  polygonImage=loadImage("pentagon.png"); 
}

function setup() {
  createCanvas(800,400);

  engine=Engine.create()
  world=engine.world

  back = createSprite(400,200,800,400); 
 ground = new Ground(600,height,1200,20);
 stand = new Ground(600,199,200,10);
 stand1 = new Ground(400,300,250,10);
 score = 0;
 
 polygon = Bodies.circle(50,200,20,{density:2,restitution:0.5});
 World.add(world,polygon);

 slingShot = new SlingShot(polygon,{ x:100, y:200 });

for(var i = 314; i<500; i=i+29){
  a.push(new Box(i,297,30,40));
}

for(var i = 343; i<460; i=i+29){
  b.push(new Box(i,277,30,40))
}

for(var i = 372; i<450; i=i+29){
  c.push(new Box(i,257,30,40));
}

for(var i = 540; i<660; i=i+29){
  d.push(new Box(i,195,30,40));
}

for(var i = 570; i<630; i=i+29){
  f.push(new Box(i,175,30,40));
}

  box16 = new Box(400,237,30,40);
  box25 = new Box(600,155,30,40);

}
  function draw(){ 
    if(backgroundImg){ 
      back.addImage(backgroundImg); 
      back.scale = 5;
    } drawSprites()

Engine.update(engine);

slingShot.Show();
imageMode(CENTER);
image(polygonImage,polygon.position.x,polygon.position.y,40,40);

  ground.display();
  stand.display();
  stand1.display();

  for(var e = 0; e<a.length; e++){
    fill(rgb(180,215,230));
    a[e].display();
    //a[e].score();
    if(flag == 1){
      a.pop();
    }
  }

  for(var e = 0; e<b.length; e++){
    fill(rgb(204,255,229));
    b[e].display();
    //b[e].score();
    if(flag == 1){
      b.pop();
    }
  }

  for(var e = 0; e<c.length; e++){
    fill(rgb(255,255,204));
    c[e].display();
    //c[e].score();
    if(flag == 1){
      c.pop();
    }
  }

  for(var e = 0; e<d.length; e++){
    fill(rgb(180,215,230));
    d[e].display();
    //d[e].score();
    if(flag == 1){
      d.pop();
    }
  }

  for(var e = 0; e<f.length; e++){
    fill(rgb(255,255,204));
    f[e].display();
    //f[e].score();
    if(flag == 1){
      f.pop();
    }
  }
 
  fill(rgb(255,204,229));
  box16.display();

 fill(rgb(255,204,229));
  box25.display();

  fill("Black");
  text("SCORE : " + score, 720, 48);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon);
  }
}

async function getBackGroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Puerto_Rico");
  var responseJSON = await response.json();
  //console.log(responseJSON);

  var datetime = responseJSON.datetime;
  //console.log(datetime);
  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour>6 && hour < 19){
      bg="sprites/bg.png"       
  }
  else{
      bg = "sprites/bg2.jpg"
  }
  backgroundImg = loadImage(bg);
}