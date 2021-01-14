let car = document.getElementById("car");
let carx = 400;
let cary = 400;
let keyD = false;
let keyS = false;
let keyA = false;
let keyW = false;
let carRR = 0;

setInterval(update, 1)

function update(){

    car.style.top = cary + "px";
    car.style.left = carx + "px";

    car.style.transform = "rotate(" + carRR + "deg)";

    if(keyW == true){

        if(carRR == 0){
            cary -= 1;
        } else if (carRR > 315){
            carx +=1;
        } else if (carRR == 180){
            cary += 1;
        } else if (carRR == 270){
            carx -= 1
        }

        /*
            cary -= (1 - (carRR * 0.0111111));

            if(carRR <= 90){
            carx += ((carRR) * 0.0111111);
            } else if (carRR > 135){
            carx += (1 - ((carRR - 90) * 0.0111111));
            } else if (carRR > 90){
                carx += ((carRR * 0.0111111) - ((carRR - 90) * 0.0111111));
                }
                */
    }

    if(keyS == true){
        cary += 1;
    }
    if(keyD == true){
        carRR += 1;
        console.log(carRR);
    }

    if(keyA == true){
        carRR -= 1;
        console.log(carRR);
    }

    if(carRR == 360){
        carRR = 0;
    }
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