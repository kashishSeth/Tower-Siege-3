class SlingShot{
  constructor(bodyC,pointD){
    var Properties ={
        bodyA:bodyC,
        pointB:pointD,
        stiffness:.08,
        length:1
    }
    this.p=pointD
    this.Sling=Constraint.create(Properties);
    World.add(world,this.Sling);
  }

  fly(){
  //null means nothing    
  this.Sling.bodyA=null
}
  attach(body){
this.Sling.bodyA = body;
}

  Show(){
//every condition written in if, the binary value of true is 1 and false is 0

if(this.Sling.bodyA){      
   var pointA = this.Sling.bodyA.position
   var pointB = this.p
   push()

   strokeWeight(1);
   stroke(48,22,8);
   
   line(pointA.x,pointA.y,pointB.x,pointB.y);
 
}
  pop()  
  }
}