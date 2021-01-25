draw();

function draw(){
  const canvas = document.getElementById("canvas");

  if (canvas.getContext){
    const ctx = canvas.getContext('2D')
    const X = canvas.width / 2;
    const Y = canvas.height / 2;
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false)
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();
  }
}