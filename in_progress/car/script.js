let car = document.getElementById("car");
let carx = 400;
let cary = 400;
let keyD = false;
let keyS = false;
let keyA = false;
let keyW = false;
let carRR = 0;


setInterval(update, 1)

const speed = 1;
const rotationSpeed = 1;

let forwardRotation = 0;

function update(){

    //
    // Uppdater först
    //

    const rotationInRadians = forwardRotation * Math.PI / 180 - Math.PI / 2;
    const xMultiplier = Math.cos(rotationInRadians);
    const yMultiplier = Math.sin(rotationInRadians);

    let direction = 0;
    direction += keyW ? 1 : 0;
    direction -= keyS ? 1 : 0;

    carx += speed * xMultiplier * direction;
    cary += speed * yMultiplier * direction;
    
    let rotateDirection = 0;
    rotateDirection -= keyA ? 1 : 0;
    rotateDirection += keyD ? 1 : 0;

    carRR += rotationSpeed * rotateDirection;
    forwardRotation += (carRR - forwardRotation) * 0.008;


    //
    // Sen rit ut
    //

    car.style.top = cary + "px";
    car.style.left = carx + "px";
    car.style.transform = "rotate(" + carRR + "deg)";
}

window.addEventListener('keydown', onKeyDown)

function onKeyDown(e){
    if(e.key == "d"){
        keyD = true;
    }
    if(e.key == "s"){
        keyS = true;
    }
    if(e.key == "a"){
        keyA = true;
    }
    if(e.key == "w"){
        keyW = true;
    }
}

window.addEventListener('keyup', onKeyUp)

function onKeyUp(e){
    if(e.key == "d"){
        keyD = false;
    }
    if(e.key == "s"){
        keyS = false;
    }
    if(e.key == "a"){
        keyA = false;
    }
    if(e.key == "w"){
        keyW = false;
    }
}