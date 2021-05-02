let counter = 0;


function setup() {
    createCanvas(600, 600);
    this.screen = 0;
    this.addCounter = new BtnCounter(width/2-100, 100, 50, 50, "+");
    this.lessCounter = new BtnCounter(width/2+100, 100, 50, 50, "-");
    this.nexBtn = new BtnCounter(width/2,500,200,50,"Siguiente");
    this.returnBtn = new BtnCounter(width/2,500,200,50,"Volver");
    this.logic;
    this.addBtn = new Btn(width/4,500,75,50);
    this.removeBtn = new Btn(width/4+ 100,500,75,50);
    this.duplicateBtn = new Btn(width/4+ 200,500,75,50);
    this.newCircleBtn = new Btn(width/4+ 300,500,75,50)
}

function draw() {
    background(220);
    switch (screen) {
        case 0:
            this.addCounter.paint()
            this.addCounter.painText()
            this.lessCounter.paint()
            this.lessCounter.painText()
            text(counter,width/2,100)

            this.nexBtn.paint();
            this.nexBtn.painText();
            break;
        case 1:
            this.logic.paint();

            this.addBtn.paint();
            this.removeBtn.paint();
            this.duplicateBtn.paint();
            this.newCircleBtn.paint();
            text("Presiona N para Ordenar",width/2,550)

            break;
        case 2:
            text("Solo se puede continuar si el campo",width/2,100)
            text("numérico tiene números entre 1 y 10.",width/2,135)

            this.returnBtn.paint();
            this.returnBtn.painText();
            break;
        case 3:

            break;
        default:
            break;
    }
}

function keyPressed() {
    switch (screen) {
        case 0:

            break;
        case 1:
            if(key === 'n' || key=== 'N'){
                logic.sortElements();
            }

            break;
        case 2:

            break;
        case 3:

            break;
        default:
            break;
    }
}

function mousePressed() {
    switch (screen) {
        case 0:
            if(this.addCounter.isHover()){
                counter++;
            }
            if(this.lessCounter.isHover()){
                counter--;
            }
            if(this.nexBtn.isHover()){
                if(counter>=1 && counter<=10){
                    logic = new Logic(counter);
                    screen = 1;
                } else {
                    screen = 2;
                }
            }
            
            break;
        case 1:
            if(this.addBtn.isHover()){
                logic.addElement();
            }
            if(this.removeBtn.isHover()){
                logic.removeElement();
            }
            if(this.duplicateBtn.isHover()){
                logic.duplicateSize();
            }
            if(this.newCircleBtn.isHover()){
                logic.createCircles();
            }
            break;
        case 2:
            if(this.returnBtn.isHover()){
                screen=0;
            }

            break;
        case 3:

            break;
        default:
            break;
    }
}