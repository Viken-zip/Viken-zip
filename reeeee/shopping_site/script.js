var box = document.getElementById('sidebar');
var contentWidth = box.clientWidth;

document.getElementById('btn').addEventListener('click', function () {
    if(contentWidth > 250){
    document.querySelector('.sidebar').classList.remove('yep');
    document.querySelector('.sidebar').classList.add('kek');
    }else{
    document.querySelector('.sidebar').classList.remove('kek');
    document.querySelector('.sidebar').classList.add('yep');
    }
  });