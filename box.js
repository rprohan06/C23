class Box
{
    constructor(x,y,w,h){
   this.body=Bodies.rectangle(x,y,w,h);
   this.w=w;
   this.h=h;
   World.add(myworld,this.body);

    }

    display()
    {
        var angle=this.body.angle;
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}