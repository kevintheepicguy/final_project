let clearbtn;


let strokeSize = 10;

let onColor = '#abafae';
let offColor = '#dae2df';

let parentDiv = "drawDiv";

function setup() {
  
  var myCanvas = createCanvas(512,512);
  myCanvas.parent(parentDiv);
  background(200);
dddd
  // clear screen
  clearbtn = createButton('Clear');
  clearbtn.parent(parentDiv);
  clearbtn.style( 'display', 'block');
  clearbtn.style( 'margin-left', '150px');
  clearbtn.style('background-color', 'red');
  clearbtn.mousePressed(function (){
    background(200);

    clearAllColor();
  })


   // Increase Brush size
   increaseSize = createButton('Increase Brush');
   increaseSize.parent(parentDiv);
   increaseSize.mousePressed(function (){
    // background(200);

    strokeSize+=1;      
   })


  // Decrease Brush size
  decreaseSize = createButton('Decrease Brush');
  decreaseSize.parent(parentDiv);
  decreaseSize.mousePressed(function (){
    strokeSize-=1;      
    if(strokeSize <= 0){
    strokeSize = 1;      
    }
  })



  // Blue stroke
  strokeBlue = createButton('Blue');
  strokeBlue.parent(parentDiv);
  strokeBlue.mousePressed(function (){
    stroke(0,0,255);

    clearAllColor();
    changeColor(strokeBlue);

  })



  // Red stroke
  strokeRed = createButton('Red');
  strokeRed.parent(parentDiv);
  strokeRed.mousePressed(function (){
    stroke(255,0,0);

    clearAllColor();
    changeColor(strokeRed);
  })



  // Green stroke
  strokeGreen = createButton('Green');
  strokeGreen.parent(parentDiv);
  strokeGreen.mousePressed(function (){
    stroke(0,255,0);

    clearAllColor();
    changeColor(strokeGreen);
  })



  // Black stroke
  strokeBlack = createButton('Black');
  strokeBlack.parent(parentDiv);
  strokeBlack.mousePressed(function (){
    stroke(0,0,0);

    clearAllColor();
    changeColor(strokeBlack);
  })



  // White stroke
  strokeWhite = createButton('White');
  strokeWhite.parent(parentDiv);
  strokeWhite.mousePressed(function (){
    stroke(255,255,255);

    clearAllColor();
    changeColor(strokeWhite);
  })


  // White stroke
  saveBtn = createButton('Save');
  saveBtn.parent(parentDiv);
  saveBtn.mousePressed(function (){
    stroke(255,255,255);

    clearAllColor();
    changeColor(strokeWhite);
  })

}

function draw() {
  if (mouseIsPressed){
    strokeWeight(strokeSize);
    line(mouseX,mouseY,pmouseX,pmouseY);
   }
}

function clearAllColor(){
  strokeBlue.style('background-color', offColor);
  strokeRed.style('background-color', offColor);
  strokeGreen.style('background-color', offColor);
  strokeBlack.style('background-color', offColor);
	strokeWhite.style('background-color', offColor);
}

function changeColor(element){
	element.style('background-color', onColor);
<<<<<<< Updated upstream
=======
}

function increaseSize(){
  strokeSize +=1;
}

function decreaseSize(){
  strokeSize -=1;
  if(strokeSize <= 0){
     strokeSize = 1;      
     }
}


function clearDrawing (){
  background(200);
}

function changeColor(){
  let colorInput = document.querySelector('#color');
  let hexInput = document.querySelector('#hex');
  let color = colorInput.value;
  console.log(color);
  stroke(color);

}



function addEventListen(){

  document.getElementById("color").addEventListener("click", changeColor);
>>>>>>> Stashed changes
}