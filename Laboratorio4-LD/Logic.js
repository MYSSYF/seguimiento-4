class Logic{
    constructor(count){
        this.circles = [];
        this.rects = [];

        for(let i=0; i<count; i++){
            this.rects.push(new Rect((75*i)+50, 200,50));
        }
    }

    paint(){
        this.rects.forEach(rect=>{
            rect.paint();
            rect.move();
        })

        if(this.circles.length !=0){
            this.circles.forEach(circle=>{
                circle.paint();
                circle.move();
            })
        }
    }

    addElement(){
        if(this.rects.length<11){
            this.rects.push(new Rect((500*Math.random())+50, 200,50));
        }
        
    }

    removeElement(){
        if(this.rects.length>0){
            this.rects.pop();
        }
    }

    duplicateSize(){
        this.rects.forEach(rect=>{
            rect.size = rect.size*2;
        })
    }

    createCircles(){
        this.circles = this.rects.map(circle=>{
            return new Circle(circle.x,circle.y+200,circle.size,circle.r,circle.g,circle.b,circle.textInside,circle.direction);
        })
    }

    sortElements(){
        this.rects.sort((a,b) => a.textInside - b.textInside);
        this.rects.forEach((rect,i)=>{
            rect.x = (75*i)+50;
        })
    }
}