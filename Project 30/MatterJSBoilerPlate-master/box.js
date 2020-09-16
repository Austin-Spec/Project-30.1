class box {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.2,
            'friction':0.3,
            'density':0.4
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      if(this.body.speed < 5){
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height)
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5
      tint(255,this.Visiblity);
      pop();
    }   
      
    }
  };

  
