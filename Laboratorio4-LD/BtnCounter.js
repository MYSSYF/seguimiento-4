class BtnCounter extends Btn{
    constructor(x, y, width, height, text) {
        super(x, y, width, height);
    
        this.text = text;
      }

      painText(){
          textSize(30);
          textAlign(CENTER);
          text(this.text,this.x,this.y);
      }
}