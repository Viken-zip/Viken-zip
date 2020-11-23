let box = document.getElementById("box");
let floor = document.getElementById("floor")
let boxx = 400;
let boxy = 0;
let speedy = 1;
let speedx = 0;

box.style.left = boxx + "px";
setInterval(update, 10);

/*
window.addEventListener('blur', () => {
  console.log("Stoppa");
});
*/

function update(){
    console.log(boxx)
    boxx = boxx + speedx;
    box.style.left = boxx + "px";

    speedy = speedy + 1;
    boxy = boxy + speedy; 

    if(boxy + 100 >= 700){
        speedy *= -0.5;
        boxy = 600;
        
        if(Math.abs(speedy) < 2){
            speedy = 0;
        }
    }
    box.style.top = boxy + "px";  
    }

    window.addEventListener('keydown', onKeyDown)

    function onKeyDown(e){

        console.log(e.key);

        if(boxy + 100 >= 700){
            if(e.key == "w"){speedy = -20}
        }
   
        
            if(e.key == "d"){speedx = 5}
            
            if(e.key == "a"){speedx = -5}
    }
    window.addEventListener('keyup', onKeyUp)

    function onKeyUp(e){
        if(e.key == "d"){speedx = 0}
        
        if(e.key == "a"){speedx = 0}
    }

