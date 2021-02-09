let run = false;

let sum = "lmaooo";

let letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " ", "-"];

let cracker1 = document.getElementById("crack1");
let cracker2 = document.getElementById("crack2");
let cracker3 = document.getElementById("crack3");
let cracker4 = document.getElementById("crack4");
let cracker5 = document.getElementById("crack5");
let cracker6 = document.getElementById("crack6");
let cracker7 = document.getElementById("crack7");
let cracker8 = document.getElementById("crack8");
let cracker9 = document.getElementById("crack9");
let cracker10 = document.getElementById("crack10");
let cracker11 = document.getElementById("crack11");
let cracker12 = document.getElementById("crack12");
let cracker13 = document.getElementById("crack13");
let cracker14 = document.getElementById("crack14");
let cracker15 = document.getElementById("crack15");

let num1;
let num2;
let num3;
let num4;
let num5;
let num6;
let num7;
let num8;
let num9;
let num10;
let num11;
let num12;

let sum1;

let pos = 0;

let ans1;

let first = true;

function getpassword(){
    var password = document.getElementById("password");

    

    run = true;
};

function random(){
    num1 = letters[Math.floor((Math.random() * 64) + 0)];
    /*
    num2 = letters[Math.floor((Math.random() * 62) + 0)];
    num3 = letters[Math.floor((Math.random() * 62) + 0)];
    num4 = letters[Math.floor((Math.random() * 62) + 0)];
    num5 = letters[Math.floor((Math.random() * 62) + 0)];
    num6 = letters[Math.floor((Math.random() * 62) + 0)];
    num7 = letters[Math.floor((Math.random() * 62) + 0)];
    num8 = letters[Math.floor((Math.random() * 62) + 0)];
    num9 = letters[Math.floor((Math.random() * 62) + 0)];
    num10 = letters[Math.floor((Math.random() * 62) + 0)];
    num11 = letters[Math.floor((Math.random() * 62) + 0)];
    num12 = letters[Math.floor((Math.random() * 62) + 0)];
    */
};

function plus (){
    return num1;
};

function check (a){
    if (a == ans1){

        console.log(a); 
        pos += 1;

    };
};

setInterval(update, 1);
function update(){

    console.log()


    //letter randomaiser

    if (run == true){

    ans1 = password.value.charAt(pos);                                                                                                                                                                                                                                                                     //uwu <3

    random();
    let sum1 = plus();
    cracker1.innerHTML = sum1;
    check(sum1);

    /*
    random();
    let sum2 = plus();
    cracker2.innerHTML = sum2;
    check(sum2);

    random();
    let sum3 = plus();
    cracker3.innerHTML = sum3;
    check(sum3);

    random();
    let sum4 = plus();
    cracker4.innerHTML = sum4;
    check(sum4);

    random();
    let sum5 = plus();
    cracker5.innerHTML = sum5;
    check(sum5);

    random();
    let sum6 = plus();
    cracker6.innerHTML = sum6;
    check(sum6);

    random();
    let sum7 = plus();
    cracker7.innerHTML = sum7;
    check(sum7);

    random();
    let sum8 = plus();
    cracker8.innerHTML = sum8;
    check(sum8);

    random();
    let sum9 = plus();
    cracker9.innerHTML = sum9;
    check(sum9);

    random();
    let sum10 = plus();
    cracker10.innerHTML = sum10;
    check(sum10);

    random();
    let sum11 = plus();
    cracker11.innerHTML = sum11;
    check(sum11);

    random();
    let sum12 = plus();
    cracker12.innerHTML = sum12;
    check(sum12);

    random();
    let sum13 = plus();
    cracker13.innerHTML = sum13;
    check(sum13);

    random();
    let sum14 = plus();
    cracker14.innerHTML = sum14;
    check(sum14);

    random();
    let sum15 = plus();
    cracker15.innerHTML = sum15;
    check(sum15);
    */

    };

};
