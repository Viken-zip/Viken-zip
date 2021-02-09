let frogX = 128;
let frogY = 128;
let frogR = 0;

//keys
let left = false;
let up = false;
let down = false;
let right = false;

//jump
let jumpSelect = false;
let jumpSelected;
let jump;
let selectorX = 128;
let selectorY = 128;
let time = 0;
let timeset = 50;
let direction = 1;

setInterval(update, 1)

function update(){

    document.getElementById("frog").style = "top: " + frogY + "px";
    document.getElementById("frog").style = "left: " + frogX + "px";

    document.getElementById("selector").style = "top: " + selectorY + "px";
    document.getElementById("selector").style = "left: " + selectorX + "px";

    /*move direction to be continued
    if(right == true){
        frogR = 90;
    } else if (up == true){

    } else if (down == true){

    } else if (left == true){

    }
    */

   if(jumpSelect == false){
    timeset = 50;
   };

   if(timeset < 10){timeset = 10}

    if(jumpSelect == true){
        time += 1;
        if(time == timeset){
            if(direction == 1){selectorY += 32} else if (direction == 2){selectorX += 32}else if (direction == 3){selectorY -= 32; console.log("hewo");} else if (direction == 4){selectorX -= 32};
            time = 0;
            timeset -= 1;
        };
    }

    if(selectorX >= 1024 || selectorX <= -1){
        selectorX = frogX;
        timeset = 50;
    }

    if(selectorY >= 1024 || selectorY <= -1){
        selectorY = frogY;
        timeset = 50;
    }

};

window.addEventListener('keydown', onKeyDown)

function onKeyDown(e){
    if(e.key == "a"){
        left = true;
        direction = 4;
    }
    if(e.key == "w"){
        up = true;
        direction = 3;
    }
    if(e.key == "d"){
        down = true;
        direction = 2;
    }
    if(e.key == "s"){
        right = true;
        direction = 1;
    }
    if(e.keyCode == 32){
        jumpSelect = true;
    }
};

window.addEventListener('keyup', onKeyUp)

function onKeyUp(e){
    if(e.key == "a"){
        left = false;
    }
    if(e.key == "w"){
        up = false;
    }
    if(e.key == "d"){
        down = false;
    }
    if(e.key == "s"){
        right = false;
    }
    if(e.keyCode == 32){
        jumpSelect = false
        frogX = selectorX;
        frogY = selectorY;
    }
};