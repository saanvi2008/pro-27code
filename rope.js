class rope{
  constructor(bodyA,bodyB,offsetX,offestY){

   this.offsetX = offsetX;
   this.offsetY = offestY;

    var options = {
      bodyA : bodyA,
      bodyB : bodyB,
      pointB: {x : this.offsetX, y : this.offsetY},
    }

    this.rope = Constraint.create(options);
    World.add(world,this.rope); 

  }

  display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    var anchor = pointB.x + this.offsetX;
    var anchorY = pointB.y + this.offsetY; 

    strokeWeight(3);
    line(pointA.x,pointA.y,anchor,anchorY);
  }
}