class Figure{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.textInside = Math.floor(Math.random()*10);
        this.r = Math.floor(Math.random()*255) ;
        this.g = Math.floor(Math.random()*255) ;
        this.b = Math.floor(Math.random()*255) ;
        this.direction = Math.random()*3;
    }

    move() {
        
        if(this.x < 0 || this.x > 600){
            this.direction *= -1;
        }

        this.x += this.direction;

    }


}