let reset = false;
let maxlaps;
let playerOneName;
let playerTwoName;
let alertonec = true;

let car = document.getElementById("car");
let carx = 920;
let cary = 240;
let keyD = false;
let keyS = false;
let keyA = false;
let keyW = false;
let carRR = 85;
let velocityX = 0;
let maxspeed = 0;
let wheelRotate = 0;
let speed = 0;
const rotationSpeed = 1;
let forwardRotation = 0;
let gear = 0;
let lap = 0;
let laptext = document.getElementById("lap");

let check1 = false;
let check2 = false;
let check3 = false;
let check4 = false;
let check5 = false;
let check6 = false;
let check7 = false;
let check8 = false;
let check9 = false;
let check10 = false;
let check11 = false;
let check12 = false;
let check13 = false;
let check14 = false;
let check15 = false;
let check16 = false;
let check17 = false;
let check18 = false;
let check19 = false;
let check20 = false;
let check21 = false;
let check22 = false;

    //
    //
    //
    //
    //
    //CAR 2 CAR 2 CAR 2 CAR 2 CAR 2 CAR 2 CAR 2 CAR 2
    //
    //
    //
    //
    //

let carTwo = document.getElementById("cartwo");
let carTwox = 925;
let carTwoy = 280;
let keyUp = false;
let keyDown = false;
let keyLeft = false;
let keyRight = false;
let carTwoRR = 85;
let velocityTwoX = 0;
let maxspeedTwo = 0;
let wheelRotateTwo = 0;
let speedTwo = 0;
const rotationSpeedTwo = 1;
let forwardRotationTwo = 0;
let RPMTwo = 0;
let gearTwo = 0;
let laptwo = 0;
let laptexttwo = document.getElementById("laptwo");

let checkt1 = false;
let checkt2 = false;
let checkt3 = false;
let checkt4 = false;
let checkt5 = false;
let checkt6 = false;
let checkt7 = false;
let checkt8 = false;
let checkt9 = false;
let checkt10 = false;
let checkt11 = false;
let checkt12 = false;
let checkt13 = false;
let checkt14 = false;
let checkt15 = false;
let checkt16 = false;
let checkt17 = false;
let checkt18 = false;
let checkt19 = false;
let checkt20 = false;
let checkt21 = false;
let checkt22 = false;

setInterval(update, 1)

function update(){

    laptext.innerHTML = lap;
    laptexttwo.innerHTML = laptwo;

    //
    //pain
    //

    if ((cary > 200 && cary < 350) && (carx > 960 && carx < 990)){check1 = true};
    if ((cary > 100 && cary < 250) && (carx > 1190 && carx < 1220) && check1){check2 = true};
    if ((cary > 110 && cary < 260) && (carx > 1390 && carx < 1420) && check2){check3 = true};
    if ((cary > 20 && cary < 170) && (carx > 1650 && carx < 1680) && check3){check4 = true};
    if ((cary > 180 && cary < 210) && (carx > 1740 && carx < 1890) && check4){check5 = true};
    if ((cary > 230 && cary < 380) && (carx > 1670 && carx < 1700) && check5){check6 = true};
    if ((cary > 370 && cary < 400) && (carx > 1390 && carx < 1540) && check6){check7 = true};
    if ((cary > 390 && cary < 560) && (carx > 1500 && carx < 1530) && check7){check8 = true};
    if ((cary > 550 && cary < 580) && (carx > 1500 && carx < 1670) && check8){check9 = true};
    if ((cary > 580 && cary < 730) && (carx > 1400 && carx < 1430) && check9){check10 = true};
    if ((cary > 370 && cary < 520) && (carx > 900 && carx < 930) && check10){check11 = true};
    if ((cary > 500 && cary < 530) && (carx > 730 && carx < 880) && check11){check12 = true};
    if ((cary > 540 && cary < 720) && (carx > 880 && carx < 910) && check12){check13 = true};
    if ((cary > 770 && cary < 800) && (carx > 890 && carx < 1000) && check13){check14 = true};
    if ((cary > 750 && cary < 900) && (carx > 800 && carx < 830) && check14){check15 = true};
    if ((cary > 530 && cary < 700) && (carx > 600 && carx < 630) && check15){check16 = true};
    if ((cary > 490 && cary < 660) && (carx > 400 && carx < 430) && check16){check17 = true};
    if ((cary > 540 && cary < 690) && (carx > 270 && carx < 300) && check17){check18 = true};
    if ((cary > 430 && cary < 460) && (carx > 0 && carx < 150) && check18){check19 = true};
    if ((cary > 170 && cary < 360) && (carx > 180 && carx < 210) && check19){check20 = true};
    if ((cary > 300 && cary < 450) && (carx > 350 && carx < 380) && check20){check21 = true};
    if ((cary > 200 && cary < 350) && (carx > 850 && carx < 880) && check21){check22 = true};

    if(check1 == true){document.getElementById("check").style = "background-color: transparent"; document.getElementById("checkI").style = "background-color: red"};
    if(check2 == true){document.getElementById("checkI").style = "background-color: transparent"; document.getElementById("checkII").style = "background-color: red"};
    if(check3 == true){document.getElementById("checkII").style = "background-color: transparent"; document.getElementById("checkIII").style = "background-color: red"};
    if(check4 == true){document.getElementById("checkIII").style = "background-color: transparent"; document.getElementById("checkIIII").style = "background-color: red"};
    if(check5 == true){document.getElementById("checkIIII").style = "background-color: transparent"; document.getElementById("checkIIIII").style = "background-color: red"};
    if(check6 == true){document.getElementById("checkIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIII").style = "background-color: red"};
    if(check7 == true){document.getElementById("checkIIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIIII").style = "background-color: red"};
    if(check8 == true){document.getElementById("checkIIIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIIIII").style = "background-color: red"};
    if(check9 == true){document.getElementById("checkIIIIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIIIIII").style = "background-color: red"};
    if(check10 == true){document.getElementById("checkIIIIIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIIIIIII").style = "background-color: red"};
    if(check11 == true){document.getElementById("checkIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIIIIIIII").style = "background-color: red"};
    if(check12 == true){document.getElementById("checkIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIIIIIIIII").style = "background-color: red"};
    if(check13 == true){document.getElementById("checkIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIIIIIIIIII").style = "background-color: red"};
    if(check14 == true){document.getElementById("checkIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIIIIIIIIIII").style = "background-color: red"};
    if(check15 == true){document.getElementById("checkIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIIIIIIIIIIII").style = "background-color: red"};
    if(check16 == true){document.getElementById("checkIIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIIIIIIIIIIIII").style = "background-color: red"};
    if(check17 == true){document.getElementById("checkIIIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIIIIIIIIIIIIII").style = "background-color: red"};
    if(check18 == true){document.getElementById("checkIIIIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIIIIIIIIIIIIIII").style = "background-color: red"};
    if(check19 == true){document.getElementById("checkIIIIIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIIIIIIIIIIIIIIII").style = "background-color: red"};
    if(check20 == true){document.getElementById("checkIIIIIIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIIIIIIIIIIIIIIIII").style = "background-color: red"};
    if(check21 == true){document.getElementById("checkIIIIIIIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checkIIIIIIIIIIIIIIIIIIIII").style = "background-color: red"};
    if(check22 == true){document.getElementById("checkIIIIIIIIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("check").style = "background-color: red"};

    if(check1 == true && check2 == true && check3 == true && check4 == true && check5 == true && check6 == true && check7 == true && check8 == true && check9 == true && check10 == true && check11 == true && check12 == true && check13 == true && check14 == true && check15 == true && check16 == true && check17 == true && check18 == true && check19 == true && check20 == true && check21 == true && check22 == true && (cary > 200 && cary < 350) && (carx > 960 && carx < 990))
    {lap += 1; check1 = false; check2 = false; check3 = false; check4 = false; check5 = false; check6 = false; check7 = false; check8 = false; check9 = false; check10 = false; check11 = false; check12 = false; check13 = false; check14 = false; check15 = false; check16 = false; check17 = false; check18 = false; check19 = false; check20 = false; check21 = false; check22 = false; };

    //
    //living is pain agreed
    //

    if(maxspeed == 0){gear = 0};

    
    //if(gear > -0.1){RPM = (7800 * ((speed * 2) - gear)) + 7800} 
    //else if (keyW === true){RPM += 100} else {RPM -= 100}
    

    wheelRotate = keyA ? -35 : (wheelRotate = keyD ? 35 : 0);

    document.getElementById("frontright").style = "transform: rotate(" + wheelRotate + "deg)";
    document.getElementById("frontleft").style = "transform: rotate(" + wheelRotate + "deg)";

    //if section varning

    if(keyW === true){
        speed += 0.005;
        
    }

    if(keyW === false){
        speed -= 0.005;
        
    }

    if(keyS === true){
        speed -= 0.02
        
    }

    if(speed < 0){
        speed = 0;
    }

    if(maxspeed > 1.5){
        maxspeed = 1.5
    }

    if(maxspeed < 0){
        maxspeed = 0;
    }

    if(speed > maxspeed){
        speed = maxspeed;
    }

    if(gear > 3){gear = 3};

    if (maxspeed == 0){
        document.getElementById("gear").innerHTML = "N";
    } else {
        document.getElementById("gear").innerHTML = gear;
    }

    document.getElementById("speed").innerHTML = speed.toFixed(1);
    if (speed > -1){
        document.getElementById("speed").style = "color: lime";
    }
    if (speed > 0.6){
        document.getElementById("speed").style = "color: yellow";
    }
    if (speed > 1.2){
        document.getElementById("speed").style = "color: red";
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

    carRR += rotationSpeed * rotateDirection * speed;
    forwardRotation += (carRR - forwardRotation) * 0.008;

    //if section varning

    if (cary > 955){
        cary = 955
    }

    if (cary < 0){
        cary = 0
    }

    if (carx > 1880){
        carx = 1880
    }

    if (carx < 0){
        carx = 0
    }

    car.style.top = cary + "px";
    car.style.left = carx + "px";
    car.style.transform = "rotate(" + carRR + "deg)";

    //
    //
    //
    //
    //
    //CAR 2 CAR 2 CAR 2 CAR 2 CAR 2 CAR 2 CAR 2 CAR 2
    //
    //
    //
    //
    //

    if(maxspeedTwo == 0){gearTwo = 0};

    if ((carTwoy > 200 && carTwoy < 350) && (carTwox > 960 && carTwox < 990)){checkt1 = true};
    if ((carTwoy > 100 && carTwoy < 250) && (carTwox > 1190 && carTwox < 1220) && checkt1){checkt2 = true};
    if ((carTwoy > 110 && carTwoy < 260) && (carTwox > 1390 && carTwox < 1420) && checkt2){checkt3 = true};
    if ((carTwoy > 20 && carTwoy < 170) && (carTwox > 1650 && carTwox < 1680) && checkt3){checkt4 = true};
    if ((carTwoy > 180 && carTwoy < 210) && (carTwox > 1740 && carTwox < 1890) && checkt4){checkt5 = true};
    if ((carTwoy > 230 && carTwoy < 380) && (carTwox > 1670 && carTwox < 1700) && checkt5){checkt6 = true};
    if ((carTwoy > 370 && carTwoy < 400) && (carTwox > 1390 && carTwox < 1540) && checkt6){checkt7 = true};
    if ((carTwoy > 390 && carTwoy < 560) && (carTwox > 1500 && carTwox < 1530) && checkt7){checkt8 = true};
    if ((carTwoy > 550 && carTwoy < 580) && (carTwox > 1500 && carTwox < 1670) && checkt8){checkt9 = true};
    if ((carTwoy > 580 && carTwoy < 730) && (carTwox > 1400 && carTwox < 1430) && checkt9){checkt10 = true};
    if ((carTwoy > 370 && carTwoy < 520) && (carTwox > 900 && carTwox < 930) && checkt10){checkt11 = true};
    if ((carTwoy > 500 && carTwoy < 530) && (carTwox > 730 && carTwox < 880) && checkt11){checkt12 = true};
    if ((carTwoy > 540 && carTwoy < 720) && (carTwox > 880 && carTwox < 910) && checkt12){checkt13 = true};
    if ((carTwoy > 770 && carTwoy < 800) && (carTwox > 890 && carTwox < 1000) && checkt13){checkt14 = true};
    if ((carTwoy > 750 && carTwoy < 900) && (carTwox > 800 && carTwox < 830) && checkt14){checkt15 = true};
    if ((carTwoy > 530 && carTwoy < 700) && (carTwox > 600 && carTwox < 630) && checkt15){checkt16 = true};
    if ((carTwoy > 490 && carTwoy < 660) && (carTwox > 400 && carTwox < 430) && checkt16){checkt17 = true};
    if ((carTwoy > 540 && carTwoy < 690) && (carTwox > 270 && carTwox < 300) && checkt17){checkt18 = true};
    if ((carTwoy > 430 && carTwoy < 460) && (carTwox > 0 && carTwox < 150) && checkt18){checkt19 = true};
    if ((carTwoy > 170 && carTwoy < 360) && (carTwox > 180 && carTwox < 210) && checkt19){checkt20 = true};
    if ((carTwoy > 300 && carTwoy < 450) && (carTwox > 350 && carTwox < 380) && checkt20){checkt21 = true};
    if ((carTwoy > 200 && carTwoy < 350) && (carTwox > 850 && carTwox < 880) && checkt21){checkt22 = true};

    if(checkt1 == true){document.getElementById("checkt").style = "background-color: transparent"; document.getElementById("checktI").style = "background-color: blue"};
    if(checkt2 == true){document.getElementById("checktI").style = "background-color: transparent"; document.getElementById("checktII").style = "background-color: blue"};
    if(checkt3 == true){document.getElementById("checktII").style = "background-color: transparent"; document.getElementById("checktIII").style = "background-color: blue"};
    if(checkt4 == true){document.getElementById("checktIII").style = "background-color: transparent"; document.getElementById("checktIIII").style = "background-color: blue"};
    if(checkt5 == true){document.getElementById("checktIIII").style = "background-color: transparent"; document.getElementById("checktIIIII").style = "background-color: blue"};
    if(checkt6 == true){document.getElementById("checktIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIII").style = "background-color: blue"};
    if(checkt7 == true){document.getElementById("checktIIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIIII").style = "background-color: blue"};
    if(checkt8 == true){document.getElementById("checktIIIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIIIII").style = "background-color: blue"};
    if(checkt9 == true){document.getElementById("checktIIIIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIIIIII").style = "background-color: blue"};
    if(checkt10 == true){document.getElementById("checktIIIIIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIIIIIII").style = "background-color: blue"};
    if(checkt11 == true){document.getElementById("checktIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIIIIIIII").style = "background-color: blue"};
    if(checkt12 == true){document.getElementById("checktIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIIIIIIIII").style = "background-color: blue"};
    if(checkt13 == true){document.getElementById("checktIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIIIIIIIIII").style = "background-color: blue"};
    if(checkt14 == true){document.getElementById("checktIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIIIIIIIIIII").style = "background-color: blue"};
    if(checkt15 == true){document.getElementById("checktIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIIIIIIIIIIII").style = "background-color: blue"};
    if(checkt16 == true){document.getElementById("checktIIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIIIIIIIIIIIII").style = "background-color: blue"};
    if(checkt17 == true){document.getElementById("checktIIIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIIIIIIIIIIIIII").style = "background-color: blue"};
    if(checkt18 == true){document.getElementById("checktIIIIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIIIIIIIIIIIIIII").style = "background-color: blue"};
    if(checkt19 == true){document.getElementById("checktIIIIIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIIIIIIIIIIIIIIII").style = "background-color: blue"};
    if(checkt20 == true){document.getElementById("checktIIIIIIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIIIIIIIIIIIIIIIII").style = "background-color: blue"};
    if(checkt21 == true){document.getElementById("checktIIIIIIIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checktIIIIIIIIIIIIIIIIIIIII").style = "background-color: blue"};
    if(checkt22 == true){document.getElementById("checktIIIIIIIIIIIIIIIIIIIII").style = "background-color: transparent"; document.getElementById("checkt").style = "background-color: blue"};

    if(checkt1 == true && checkt2 == true && checkt3 == true && checkt4 == true && checkt5 == true && checkt6 == true && checkt7 == true && checkt8 == true && checkt9 == true && checkt10 == true && checkt11 == true && checkt12 == true && checkt13 == true && checkt14 == true && checkt15 == true && checkt16 == true && checkt17 == true && checkt18 == true && checkt19 == true && checkt20 == true && checkt21 == true && checkt22 == true && (carTwoy > 200 && carTwoy < 350) && (carTwox > 960 && carTwox < 990))
    {laptwo += 1; checkt1 = true; checkt2 = false; checkt3 = false; checkt4 = false; checkt5 = false; checkt6 = false; checkt7 = false; checkt8 = false; checkt9 = false; checkt10 = false; checkt11 = false; checkt12 = false; checkt13 = false; checkt14 = false; checkt15 = false; checkt16 = false; checkt17 = false; checkt18 = false; checkt19 = false; checkt20 = false; checkt21 = false; checkt22 = false; };

    wheelRotateTwo = keyLeft ? -35 : (wheelRotateTwo = keyRight ? 35 : 0);

    document.getElementById("frontrightTwo").style = "transform: rotate(" + wheelRotateTwo + "deg)";
    document.getElementById("frontleftTwo").style = "transform: rotate(" + wheelRotateTwo + "deg)";

    //if section varning

    if(keyUp === true){
        speedTwo += 0.005;
    }

    if(keyUp === false){
        speedTwo -= 0.005;
    }

    if(keyDown === true){
        speedTwo -= 0.02
    }

    if(speedTwo < 0){
        speedTwo = 0;
    }

    if(maxspeedTwo > 1.5){
        maxspeedTwo = 1.5
    }

    if(maxspeedTwo < 0){
        maxspeedTwo = 0;
    }

    if(speedTwo > maxspeedTwo){
        speedTwo = maxspeedTwo;
    }

    if(gearTwo > 3){gearTwo = 3};

    if (maxspeedTwo == 0){
        document.getElementById("gearTwo").innerHTML = "N";
    } else {
        document.getElementById("gearTwo").innerHTML = gearTwo;
    }

    document.getElementById("speedTwo").innerHTML = speedTwo.toFixed(1);
    if (speedTwo > -1){
        document.getElementById("speedTwo").style = "color: lime";
    }
    if (speedTwo > 0.6){
        document.getElementById("speedTwo").style = "color: yellow";
    }
    if (speedTwo > 1.2){
        document.getElementById("speedTwo").style = "color: red";
    }

    const rotationInRadiansTwo = forwardRotationTwo * Math.PI / 180 - Math.PI / 2;
    const xMultiplierTwo = Math.cos(rotationInRadiansTwo);
    const yMultiplierTwo = Math.sin(rotationInRadiansTwo);

    let directionTwo = 1;

    /*
    direction += keyW ? 1 : 0;
    direction -= keyS ? 1 : 0;
    */

    carTwox += speedTwo * xMultiplierTwo * directionTwo;
    carTwoy += speedTwo * yMultiplierTwo * directionTwo;
    
    let rotateDirectionTwo = 0;
    rotateDirectionTwo -= keyLeft ? 1 : 0;
    rotateDirectionTwo += keyRight ? 1 : 0;

    carTwoRR += rotationSpeedTwo * rotateDirectionTwo * speedTwo;
    forwardRotationTwo += (carTwoRR - forwardRotationTwo) * 0.008;

    //if section varning

    if (carTwoy > 955){
        carTwoy = 955
    }

    if (carTwoy < 0){
        carTwoy = 0
    }

    if (carTwox > 1880){
        carTwox = 1880
    }

    if (carTwox < 0){
        carTwox = 0
    }

    carTwo.style.top = carTwoy + "px";
    carTwo.style.left = carTwox + "px";
    carTwo.style.transform = "rotate(" + carTwoRR + "deg)";

    if (reset == true){
        carx = 920;
        cary = 240;
        carRR = 85;

        carTwox = 925;
        carTwoy = 280;
        carTwoRR = 85;

        laptwo = 0; 
        checkt1 = false; checkt2 = false; checkt3 = false; checkt4 = false; checkt5 = false; checkt6 = false; checkt7 = false; checkt8 = false; checkt9 = false; checkt10 = false; checkt11 = false; checkt12 = false; checkt13 = false; checkt14 = false; checkt15 = false; checkt16 = false; checkt17 = false; checkt18 = false; checkt19 = false; checkt20 = false; checkt21 = false; checkt22 = false;

        lap = 0; 
        check1 = false; check2 = false; check3 = false; check4 = false; check5 = false; check6 = false; check7 = false; check8 = false; check9 = false; check10 = false; check11 = false; check12 = false; check13 = false; check14 = false; check15 = false; check16 = false; check17 = false; check18 = false; check19 = false; check20 = false; check21 = false; check22 = false;

        playerOneName = " ";
        playerTwoName = " ";
        maxlaps = 69;

        document.getElementById("checktIIIIIIIIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checktIIIIIIIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checktIIIIIIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checktIIIIIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checktIIIIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checktIIIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checktIIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checktIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checktIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checktIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checktIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checktIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checktIIIIIIII").style = "background-color: transparent";
        document.getElementById("checktIIIIIII").style = "background-color: transparent";
        document.getElementById("checktIIIIII").style = "background-color: transparent";
        document.getElementById("checktIIIII").style = "background-color: transparent";
        document.getElementById("checktIIII").style = "background-color: transparent";
        document.getElementById("checktIII").style = "background-color: transparent";
        document.getElementById("checktII").style = "background-color: transparent";
        document.getElementById("checktI").style = "background-color: transparent";
        document.getElementById("checkt").style = "background-color: blue";

        document.getElementById("checkIIIIIIIIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checkIIIIIIIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checkIIIIIIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checkIIIIIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checkIIIIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checkIIIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checkIIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checkIIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checkIIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checkIIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checkIIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checkIIIIIIIII").style = "background-color: transparent";
        document.getElementById("checkIIIIIIII").style = "background-color: transparent";
        document.getElementById("checkIIIIIII").style = "background-color: transparent";
        document.getElementById("checkIIIIII").style = "background-color: transparent";
        document.getElementById("checkIIIII").style = "background-color: transparent";
        document.getElementById("checkIIII").style = "background-color: transparent";
        document.getElementById("checkIII").style = "background-color: transparent";
        document.getElementById("checkII").style = "background-color: transparent";
        document.getElementById("checkI").style = "background-color: transparent";
        document.getElementById("check").style = "background-color: red";
    }

    if ((laptwo == maxlaps) && (alertonec == true)){alert("and the winner is " + playerTwoName + "!"); alertonec = false}
    if ((lap == maxlaps) && (alertonec == true)){alert("and the winner is " + playerOneName + "!"); alertonec = false}
    
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
        gear += 1;
    }
    if(e.key == "q"){
        maxspeed -= 0.5;
        gear -= 1;
    }

    if (e.key == 'ä') {
        keyRight = true;
    }
    if (e.key == 'ö') {
        keyDown = true;
    }
    if (e.key == 'l') {
        keyLeft = true;
    }
    if (e.key == 'p') {
        keyUp = true;
    }
    if (e.key == "å"){
        maxspeedTwo += 0.5;
        gearTwo += 1;
    }
    if (e.key == "o"){
        maxspeedTwo -= 0.5;
        gearTwo -= 1;
    }
    if (e.key == "m"){
        reset = true;
    }
    if (e.key == "r"){
        playerOneName = prompt("red car player name?");
    }
    if (e.key == "i"){
        playerTwoName = prompt("blue car player name?");
    }
    if (e.key == "n"){
        maxlaps = prompt("how many laps?");
        console.log(maxlaps);
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

    if (e.key == 'ä') {
        keyRight = false;
    }
    if (e.key == 'ö') {
        keyDown = false;
    }
    if (e.key == 'l') {
        keyLeft = false;
    }
    if (e.key == 'p') {
        keyUp = false;
    }
    if (e.key == "m"){
        reset = false;
    }
}