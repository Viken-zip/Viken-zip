let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");
let Y = 0;
let X = 400;

let w = window.innerWidth                                                                                                              //uwu <3
let h = window.innerHeight

let numa;
let numb;
let numc;

let letera;
let leterb;
let leterc;

let sum;

let highX = 0;

let letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

Canvas.width = w;
Canvas.height = h;

class box {
    constructor(height, width){
        this.height = height;
        this.width = width;

        ctx.save();
        ctx.translate(height, width);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0,0,50,50);
        ctx.restore();
    }
}

class ball{
    constructor(Y, X){
        ctx.beginPath();
        ctx.arc(300, 150, 10, 0, 2 * Math.PI);
        ctx.stroke();

    }
}

class line{
    constructor(Y, X, YY, XX){
        ctx.beginPath();
        ctx.moveTo(Y, X);
        ctx.lineTo(YY, XX);
        ctx.stroke();
    }
}

class randomball{
    constructor(X, Y, no){
        if(this.no == 0){
        let maxx = window.innerWidth; 
        let maxy = window.innerHeight;
        let minx = 0;
        let miny = 0; 

        let aY = Math.floor((Math.random() * maxy) + miny);
        let aX = Math.floor((Math.random() * maxx) + minx);

        ctx.beginPath();
        ctx.arc(aX, aY, 10, 0, 2 * Math.PI);
        ctx.stroke();

        } else if (this.no == 1) {

        this.Y = thatY;
        this.X = thatX;

        ctx.beginPath();
        ctx.arc(thatX, thatY, 10, 0, 2 * Math.PI);
        ctx.stroke();
        };
    }
}

setInterval(randomiser, 100);
function randomiser(){
    highX += 1;
    let b = new randomball(highX, 100, 1);
};