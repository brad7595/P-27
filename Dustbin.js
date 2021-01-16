class Dustbin {
   constructor(x,y,width,height){
    var options={
     'isStatic' :true
    }
   
    this.bodyA = Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.bodyA);

    this.bodyB = Bodies.rectangle(x-(width/2)),(y-(height*2));
    World.add(world,this.bodyB);

    this.bodyC = Bodies.rectangle(x+(width/2)),(y-(height*2));
    World.add(world,this.bodyC);

   }
   display(){
    fill("blue")

   }


}