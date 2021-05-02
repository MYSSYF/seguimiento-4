class Circle extends Figure{
    constructor(x,y,size,r,g,b,textInside,direction){
        super(x,y,size)
        this.r = r;
        this.g = g;
        this.b = b;
        this.textInside = textInside;
        this.direction = direction;
    }

    paint(){
        fill(this.r,this.g,this.b);
        circle(this.x,this.y,this.size)
        fill(0) 
        text(this.textInside,this.x,this.y)
    }
}