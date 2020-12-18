    let ball = document.getElementById("ball");
    let ballx = 0;
    let bally = 20;
    let directionvalue = 1;

setInterval(update, 1);
setInterval(cordinates, 100)

function cordinates(){
    console.log((bally),(ballx));
    }

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

    if (ballx == 1255){
        if (directionvalue == 2){
            directionvalue = 3;
            console.log(directionvalue);
        }
    }

    if (ballx == 1255){
        if (directionvalue == 1){
            directionvalue = 4;
            console.log(directionvalue);
        }
    }

    if (bally == 695){
        if (directionvalue == 3){
            directionvalue = 4;
            console.log(directionvalue);
        }
    }

    if (bally == 695){
        if (directionvalue == 2){
            directionvalue = 1;
            console.log(directionvalue);
        }
    }

    if(directionvalue == 1){
        ball.style.backgroundColor = "blue";
        ballx = ballx + 1;
        bally = bally - 1;
    } else if (directionvalue == 2){
        ball.style.backgroundColor = "red";
        ballx = ballx + 1;
        bally = bally + 1;
    } else if (directionvalue == 3){
        ball.style.backgroundColor = "yellow";
        ballx = ballx - 1;
        bally = bally + 1;
    } else if (directionvalue == 4){
        ball.style.backgroundColor = "green";
        ballx = ballx - 1;
        bally = bally - 1;
    }

    ball.style.top = bally + "px";
    ball.style.left = ballx + "px";
}

function change(){
    directionvalue = Math.floor(Math.random() * 3) + 1;
}
