class Rect extends Figure{
    constructor(x,y,size){
        super(x,y,size)
    }

    paint(){
        fill(this.r,this.g,this.b);
        rect(this.x,this.y,this.size,this.size)
        fill(0) 
        text(this.textInside,this.x,this.y)
    }
}