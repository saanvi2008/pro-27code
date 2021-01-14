class bob{

    constructor(x,y,r){
       var options = {
           isStatic  : false,
           restitution : 0.3,
           friction    : 0.2,
           density     : 1.2
       }

       this.x = x;
       this.y = y;
       this.r = r;
      
       this.body = Bodies.circle(this.x,this.y,this.r/2,options);
     
       World.add(world,this.body);
      

    }
    display(){
        var pos1 = this.body.position;
        
 
        push ();
        translate (pos1.x,pos1.y);
        rectMode(CENTER);
        fill("magenta");
        strokeWeight(2);
        stroke("black");
        ellipse(0,0,this.r,this.r);
        pop ();

       
    }
}