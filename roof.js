class roof{
    constructor(x,y,width,height){
    
        var groundOptions={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,groundOptions);
        this.width=width;
        this.height=width;
        World.add(world,this.body);
    }
    
       display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("grey");
        rect(pos.x,pos.y,this.width,this.height);
       }
    }