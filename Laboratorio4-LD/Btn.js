
class Btn{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    paint() {
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
    }

    isHover() {
        var isSobre = false;
      
        if (
            mouseX > (this.x - (this.width / 2)) &&
            mouseX < (this.x + (this.width / 2)) &&
            mouseY > (this.y - (this.height / 2)) &&
            mouseY < (this.y + (this.height / 2))
        ) {
            isSobre = true;
        }
        return isSobre;
    }
}