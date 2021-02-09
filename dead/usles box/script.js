let box = document.getElementById("box");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let boxx = 100;
let boxy = 400;
let boxx2 = 100;
let boxy2 = 400;
let time = 0;
let timee = 0;
let keyD = false;
let keyS = false;
let keyA = false;
let keyW = false;

setInterval(follow, 10)

function follow(){
    time += 1;
    timee += 1;
    
    if(time === 1){
        box2.style.left = boxx2 + "px";
        box2.style.top = boxy2 + "px";
        time = 0;
    }
    if(timee === 2){
        box3.style.left = boxx2 + "px";
        box3.style.top = boxy2 + "px";
        timee = 0;
    }
}

setInterval(update, 1);

function update(){
    boxx2 = boxx;
    boxy2 = boxy;

    if(boxx >= 1780){
        boxx = 1780;
    }
    if(boxy >= 880){
        boxy = 880;
    }
    if(boxx <= 0){
        boxx = 0
    }
    if(boxy <= 0){
        boxy = 0
    }

    box.style.left = boxx + "px";
    box.style.top = boxy + "px";

    if(keyD == true){
        boxx += 10;
    }
    if(keyS == true){
        boxy += 10;
    }
    if(keyA == true){
        boxx -= 10;
    }
    if(keyW == true){
        boxy -= 10;
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