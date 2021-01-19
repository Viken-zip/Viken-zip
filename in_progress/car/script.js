let car = document.getElementById("car");
let carx = 400;
let cary = 400;
let keyD = false;
let keyS = false;
let keyA = false;
let keyW = false;
let carRR = 0;
let velocityX = 0;
let maxspeed = 0;

setInterval(update, 1)

let speed = 0;
const rotationSpeed = 1;

let forwardRotation = 0;

function update(){

    //
    // Uppdater först
    //

    if(keyW === true){
        speed += 0.005;
    }

    if(keyW === false){
        speed -= 0.005;
    }

    if(speed < 0){
        speed = 0;
    }

    if(maxspeed > 3.5){
        maxspeed = 3.5;
    }

    if(maxspeed < -0.5){
        maxspeed = -0.5;
    }

    if(speed > maxspeed){
        speed = maxspeed;
    }

    if(maxspeed == -0.5){
        document.getElementById("gear").innerHTML = "R";
    } else if (maxspeed == 0){
        document.getElementById("gear").innerHTML = "N";
    } else if (maxspeed == 0.5){
        document.getElementById("gear").innerHTML = "1";
    }else if (maxspeed == 1){
        document.getElementById("gear").innerHTML = "2";
    }else if (maxspeed == 1.5){
        document.getElementById("gear").innerHTML = "3";
    }else if (maxspeed == 2){
        document.getElementById("gear").innerHTML = "4";
    }else if (maxspeed == 2.5){
        document.getElementById("gear").innerHTML = "5";
    }else if (maxspeed == 3){
        document.getElementById("gear").innerHTML = "6";
    }else if (maxspeed == 3.5){
        document.getElementById("gear").innerHTML = "7";
    }

    const rotationInRadians = forwardRotation * Math.PI / 180 - Math.PI / 2;
    const xMultiplier = Math.cos(rotationInRadians);
    const yMultiplier = Math.sin(rotationInRadians);

    let direction = 1;
    /*
    direction += keyW ? 1 : 0;
    direction -= keyS ? 1 : 0;
    */

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
    if(e.key == "e"){
        maxspeed += 0.5;
    }
    if(e.key == "q"){
        maxspeed -= 0.5;
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