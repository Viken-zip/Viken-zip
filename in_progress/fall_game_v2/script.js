//falling ball V2 made by Viken-zip

//ctx
let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

//variablre
let MoveRight = false;
let MoveLeft = false;

let pX = innerWidth / 2;
let pY = innerHeight / 2;

let fall = 1;

let OnPlatform = false;

let maxwidth = innerWidth * -1;

//console.log(RandomPlatform);

let move = Math.floor(Math.random() * (innerWidth - 100)) + -2460;
let meve = move + 100;

let move1 = Math.floor(Math.random() * (innerWidth - 100)) + -2460;
let meve1 = move1 + 100;

let move2 = Math.floor(Math.random() * (innerWidth - 100)) + -2460;
let meve2 = move2 + 100;

let move3 = Math.floor(Math.random() * (innerWidth - 100)) + -2460;
let meve3 = move3 + 100;

let move4 = Math.floor(Math.random() * (innerWidth - 100)) + -2460;
let meve4 = move4 + 100;

let move5 = Math.floor(Math.random() * (innerWidth - 100)) + -2460;
let meve5 = move5 + 100;

let Platform1 = [move, innerHeight, 2460, 25];
let Platform2 = [meve + 2460, innerHeight, 2500, 25];
let Platform3 = [move1, innerHeight + 250, 2460, 25];
let Platform4 = [meve1 + 2460, innerHeight + 250, 2500, 25];
let Platform5 = [move2, innerHeight + 500, 2460, 25];
let Platform6 = [meve2 + 2460, innerHeight + 500, 2500, 25];
let Platform7 = [move3, innerHeight + 750, 2460, 25];
let Platform8 = [meve3 + 2460, innerHeight + 750, 2500, 25];
let Platform9 = [move4, innerHeight + 1000, 2460, 25];
let Platform10 = [meve4 + 2460, innerHeight + 1000, 2500, 25];
let Platform11 = [move5, innerHeight + 1250, 2460, 25];
let Platform12 = [meve5 + 2460, innerHeight + 1250, 2500, 25];

let time = 0;

let upp = 0;

let speed = innerWidth * 0.002;

let once = false;

let onceAfter = 0;

let fakeTime = 0;

let notSoFast1 = false;
let notSoFast2 = false;
let notSoFast3 = false;
let notSoFast4 = false;
let notSoFast5 = false;
let notSoFast6 = false;

let score = 0;

let O = false;

//classes
class ball{
    constructor(X, Y, size){
        ctx.beginPath();
        ctx.arc(X, Y, 20, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}

class Platform{
    constructor(X, Y, XX, YY){
        ctx.beginPath();
        ctx.rect(X, Y, XX, YY)
        ctx.fill();
        ctx.stroke();
    }
}

function touchPlatform(X, XX, Y, YY){
    if(pX > X && pX < XX + X && pY > Y - 20 && pY < Y + YY){
        pY = Y - 20;
    };
};

function check(){
    if(pY > Platform1[1] && pY < (Platform1[1] + 25)){
        if(notSoFast1 == false){
            score += 1;
            notSoFast1 = true;
            notSoFast2 = false;
        };
    };

    if(pY > Platform3[1] && pY < (Platform3[1] + 25)){
        if(notSoFast2 == false){
            score += 1;
            notSoFast2 = true;
            notSoFast3 = false;
        };
    };

    if(pY > Platform5[1] && pY < (Platform5[1] + 25)){
        if(notSoFast3 == false){
            score += 1;
            notSoFast3 = true;
            notSoFast4 = false;
        };
    };

    if(pY > Platform7[1] && pY < (Platform7[1] + 25)){
        if(notSoFast4 == false){
            score += 1;
            notSoFast4 = true;
            notSoFast5 = false;
        };
    };

    if(pY > Platform9[1] && pY < (Platform9[1] + 25)){
        if(notSoFast5 == false){
            score += 1;
            notSoFast5 = true;
            notSoFast6 = false;
        };
    };

    if(pY > Platform11[1] && pY < (Platform11[1] + 25)){
        if(notSoFast6 == false){
            score += 1;
            notSoFast6 = true;
            notSoFast1 = false;
        };
    };
};

//setInterval functions
setInterval (log, 100);
function log(){
    //console.log(Math.floor(Math.random() * 2460) - 2460 + innerWidth);
    //console.log(2460 - innerWidth);
    //console.log((2460 - innerWidth) * -1);
    //console.log(Math.floor(Math.random() * innerWidth) + -2460);
    //console.log(time, upp, speed);
};

setInterval (update, 1);

function update(){

    //console.log(innerWidth * -1);

    ctx.clearRect(0, 0, innerWidth, innerHeight);

    let a = new ball (pX, pY, 15);
    let b = new Platform (Platform1[0], Platform1[1], Platform1[2], Platform1[3])
    let c = new Platform (Platform2[0], Platform2[1], Platform2[2], Platform2[3])
    let d = new Platform (Platform3[0], Platform3[1], Platform3[2], Platform3[3])
    let e = new Platform (Platform4[0], Platform4[1], Platform4[2], Platform4[3])
    let f = new Platform (Platform5[0], Platform5[1], Platform5[2], Platform5[3])
    let g = new Platform (Platform6[0], Platform6[1], Platform6[2], Platform6[3])
    let h = new Platform (Platform7[0], Platform7[1], Platform7[2], Platform7[3])
    let i = new Platform (Platform8[0], Platform8[1], Platform8[2], Platform8[3])
    let j = new Platform (Platform9[0], Platform9[1], Platform9[2], Platform9[3])
    let k = new Platform (Platform10[0], Platform10[1], Platform10[2], Platform10[3])
    let l = new Platform (Platform11[0], Platform11[1], Platform11[2], Platform11[3])
    let m = new Platform (Platform12[0], Platform12[1], Platform12[2], Platform12[3])

    pY += 3;

    if(MoveRight == true){
        pX += speed;
    };

    if(MoveLeft == true){
        pX -= speed;
    };

    /*
    if(Y < Platform1[0]){
        
    };
    */

    Platform1[1] -= upp;
    Platform2[1] -= upp;
    Platform3[1] -= upp;
    Platform4[1] -= upp;
    Platform5[1] -= upp;
    Platform6[1] -= upp;
    Platform7[1] -= upp;
    Platform8[1] -= upp;
    Platform9[1] -= upp;
    Platform10[1] -= upp;
    Platform11[1] -= upp;
    Platform12[1] -= upp;

    /*
    upp += 0.0001
    fall += 0.0001
    speed += 0.0001
    */

    touchPlatform(Platform1[0], Platform1[2], Platform1[1], Platform1[3]);
    touchPlatform(Platform2[0], Platform2[2], Platform2[1], Platform2[3]);
    touchPlatform(Platform3[0], Platform3[2], Platform3[1], Platform3[3]);
    touchPlatform(Platform4[0], Platform4[2], Platform4[1], Platform4[3]);
    touchPlatform(Platform5[0], Platform5[2], Platform5[1], Platform5[3]);
    touchPlatform(Platform6[0], Platform6[2], Platform6[1], Platform6[3]);
    touchPlatform(Platform7[0], Platform7[2], Platform7[1], Platform7[3]);
    touchPlatform(Platform8[0], Platform8[2], Platform8[1], Platform8[3]);
    touchPlatform(Platform9[0], Platform9[2], Platform9[1], Platform9[3]);
    touchPlatform(Platform10[0], Platform10[2], Platform10[1], Platform10[3]);
    touchPlatform(Platform11[0], Platform11[2], Platform11[1], Platform11[3]);
    touchPlatform(Platform12[0], Platform12[2], Platform12[1], Platform12[3]);

    if(Platform1[1] < -20){
        move = Math.floor(Math.random() * (innerWidth - 100)) + -2500;
        meve = move + 100;
        Platform1 = [move, 1500, 2460, 25];
        Platform2 = [meve + 2460, 1500, 2500, 25];
    };

    if(Platform3[1] < -20){
        move1 = Math.floor(Math.random() * (innerWidth - 100)) + -2460;
        meve1 = move1 + 100;
        Platform3 = [move1, 1500, 2460, 25];
        Platform4 = [meve1 + 2460, 1500, 2500, 25];
    };

    if(Platform5[1] < -20){
        move2 = Math.floor(Math.random() * (innerWidth - 100)) + -2460;
        meve2 = move2 + 100;
        Platform5 = [move2, 1500, 2460, 25];
        Platform6 = [meve2 + 2460, 1500, 2500, 25];   
    };

    if(Platform7[1] < -20){
        move3 = Math.floor(Math.random() * (innerWidth - 100)) + -2460;
        meve3 = move3 + 100;
        Platform7 = [move3, 1500, 2460, 25];
        Platform8 = [meve3 + 2460, 1500, 2500, 25];
    };

    if(Platform9[1] < -20){
        move4 = Math.floor(Math.random() * (innerWidth - 100)) + -2460;
        meve4 = move4 + 100;
        Platform9 = [move4, 1500, 2460, 25];
        Platform10 = [meve4 + 2460, 1500, 2500, 25];
    };

    if(Platform11[1] < -20){
        move5 = Math.floor(Math.random() * (innerWidth - 100)) + -2460;
        meve5 = move5 + 100;
        Platform11 = [move5, 1500, 2460, 25];
        Platform12 = [meve5 + 2460, 1500, 2500, 25];
    };

    if(pY > innerHeight - 20){
        pY = innerHeight - 20
    };

    if(pX > innerWidth - 20){
        pX = innerWidth - 20
    };

    if(pX < 20){
        pX = 20;
    };

    time += 0.0025;

    if(upp < 1.4){
        if(time > 5){
            upp += 0.25;
            time = 0;
        };
    } else {
        if(O == false){
            speed += speed / 5;
            O = true;
        };
    };

    if(pY < 0){
        pY = -10000;
        pX = 10000;
        if(once == false){
            once = true;
            alert("yore score is: " + score);
        };
    };

    check();

    if(onceAfter < 11){
    onceAfter += 1;
    };

    if(onceAfter == 10){
        alert("ready?");
        upp = 0.75;
    };


    if(innerWidth <= 700){
        alert("too small window");
    };

};

//if key down
window.addEventListener('keydown', onKeyDown)

function onKeyDown(e){
    
    if(e.key == "d"){
        MoveRight = true;
    };

    if(e.key == "a"){
        MoveLeft = true;
    };
}

//if key up
window.addEventListener('keyup', onKeyUp)

function onKeyUp(e){
    if(e.key == "d"){
        MoveRight = false;
    };

    if(e.key == "a"){
        MoveLeft = false;
    };
}