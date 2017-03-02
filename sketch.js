var redValue = 0;
var greenValue = 0;
var blueValue = 0;
 

function setup() {
    createCanvas(800, 800);
    background(255);
    fill(0);
}

function draw(){
    var x1 = random(100,700)
    var y1 = random(300,500)
    
    
    
    redValue = random(100,255)
    greenValue = random(100,255)
    blueValue = random(100,255)
                       
    strokeWeight(6)
    
    stroke(redValue)

 
    if (mouseX < 400) {
        stroke(redValue,0,0)      ;
    } 
    
    if(mouseY <400){
        stroke(0,greenValue,0)
    }
    
    if(mouseY>400 && mouseX>400){
        stroke(0,0,blueValue)
    }
    
    if(mouseIsPressed){
        stroke(redValue,greenValue,blueValue)
    }

    line(x1, y1, mouseX, mouseY);
    
    
    
    
}
