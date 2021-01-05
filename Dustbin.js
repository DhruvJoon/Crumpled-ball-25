class Dustbin{
    constructor(x,y){

        var options ={
            isStatic : true
        }

        this.x =x;
        this.y =y;
        this.bottom = Bodies.rectangle(this.x,this.y,200,20,options);
        this.left = Bodies.rectangle(this.x+10,this.y-50,20,100,options);
        this.right = Bodies.rectangle(this.x+135,this.y-50,20,100,options);
        this.Image = loadImage("dustbingreen.png")

        World.add(world, this.bottom);
        World.add(world, this.left);
        World.add(world, this.right);

    }

    display(){

        var posBottom =this.bottom.position;
        var posLeft =this.left.position;
        var posRight =this.right.position;

        rectMode(CENTER);
        fill("red");

        image(this.Image,posBottom.x,posBottom.y-90,150,100);
//rect(posLeft.x,posLeft.y,20,100);
       //s rect(posRight.x,posRight.y,20,100);


    }



}