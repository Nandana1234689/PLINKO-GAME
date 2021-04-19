var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;


function preload(){
  bg = loadImage("bg.jpg")
 
 }
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);



  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   
  }


  //create  plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  
  for (var j = 75; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }



  
}
 


function draw() {
  background(0); 
  
  image (bg,0,0,800,800)  
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display(); 
      
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
    
  }

  //display the paricles 
if (frameCount%60===0){
     particles.push(new Paricles(random(width/2-10,width/2+10),10,10))
  } 

  for(var n = 0; n<particles.length;n++){
    particles[n].display();
    
  }
  


}