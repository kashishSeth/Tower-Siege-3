class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.Visibility = 255;
  }
  display(){

    //console.log(this.body.speed);
     
    if(this.body.speed < 10){
      super.display();
      flag = 0;
    } 
    else{
      World.remove(world, this.body);
      push();
  
      this. Visibility = this.Visibility - -50;
      score++
      console.log(score); 
      tint(255, this.Visibility);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      pop();  
      flag = 1;
    }
  }

  /*score(){

    if (this.Visiblity < 0 && this.Visiblity > -105){
      score++;
    console.log(this.score);  
    }
  }*/

};