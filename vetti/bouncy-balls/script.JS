let ball = document.getElementById("ball");
let ballx = 0;
let bally = 20;
let directionvalue = 1;

setInterval(update, 1);

function update(){

    if (ballx == 0){
        if (directionvalue == 3){
             directionvalue = 2;
             console.log(directionvalue);
        }
    }

    if (ballx == 0){
        if (directionvalue == 4){
            directionvalue = 1;
            console.log(directionvalue);
        }
    }

    if (bally == 0){
        if (directionvalue == 1){
            directionvalue = 2;
            console.log(directionvalue);
        }
    }

    if (bally == 0){
        if (directionvalue == 4){
            directionvalue = 3;
            console.log(directionvalue);
        }
    }

    if (ballx == 575){
        if (directionvalue == 2){
            directionvalue = 3;
            console.log(directionvalue);
        }
    }

    if (ballx == 575){
        if (directionvalue == 1){
            directionvalue = 4;
            console.log(directionvalue);
        }
    }

    if (bally == 375){
        if (directionvalue == 3){
            directionvalue = 4;
            console.log(directionvalue);
        }
    }

    if (bally == 375){
        if (directionvalue == 2){
            directionvalue = 1;
            console.log(directionvalue);
        }
    }

    if(directionvalue == 1){
        ballx = ballx + 1;
        bally = bally - 1;
    } else if (directionvalue == 2){
        ballx = ballx + 1;
        bally = bally + 1;
    } else if (directionvalue == 3){
        ballx = ballx - 1;
        bally = bally + 1;
    } else if (directionvalue == 4){
        ballx = ballx - 1;
        bally = bally - 1;
    }

    ball.style.top = bally + "px";
    ball.style.left = ballx + "px";
}