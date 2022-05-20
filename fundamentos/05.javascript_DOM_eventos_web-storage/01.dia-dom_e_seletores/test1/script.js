let leftSide = document.querySelector('.emergency-tasks').style.backgroundColor = 'darkblue';
let rightSide = document.querySelector('.no-emergency-tasks').style.backgroundColor = 'green';
let titleLeft = document.querySelectorAll('.emergency-tasks h3');
let titleRight = document.querySelectorAll('.no-emergency-tasks h3');


for (let i = 0; i < titleLeft.length; i += 1){
  titleLeft[i].style.backgroundColor = 'green';
}
for (let i = 0; i < titleRight.length; i += 1){
  titleRight[i].style.backgroundColor = 'darkblue';
}


centerTitle = document.querySelector('#header-container').style.backgroundColor = 'green';

document.getElementById('footer-container').style.backgroundColor = 'black';


