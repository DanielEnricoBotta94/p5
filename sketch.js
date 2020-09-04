
let canvasX = 600;
let canvasY = 600;
let block;

function setup() {
    createCanvas(600, 600);
    background(51);
    block = new Block(canvasX / 2, canvasY / 2, 50, 50);
}

function draw() {
    background(51)
    block.show();
}

function mousePressed(event){
    
    if(
        event.offsetX > block.getX() && 
        event.offsetX < block.getX() + block.width && 
        event.offsetY > block.getY() && 
        event.offsetY < block.getY()+ block.height
    ){
        block.play();
    }
}

function mouseReleased(event){
    block.stop();
}

class Block{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.sound = 1;
    }

    show(){
        stroke(255);
        this.drawRect();
    }

    getX() {
        return this.x - (this.width / 2);
    } 

    getY(){
        return this.y - (this.height / 2);
    }

    drawRect(){
        rect(this.getX(), this.getY(), this.width, this.height);
    }
    
    play(){
        fill(255, 0, 0)
        this.drawRect();
    }

    stop(){
        fill(255);
        this.drawRect();
    }
}