window.onload 

function makeElement(str){
  var newElement = document.createElement(str);
  return newElement;
}
const body = document.getElementsByTagName('body')[0];


let fundoText = makeElement('div');
fundoText.style.backgroundColor = 'white'
fundoText.style.width = '362px'
body.appendChild(fundoText);
const paragraph = document.getElementsByTagName('p')[0];
const background = makeElement('h2');
background.innerText = 'Background Color';
fundoText.appendChild(background);

body.style.margin = '20px';
const divBackground = makeElement('div');
background.appendChild(divBackground);
divBackground.style.border = 'solid black 1px';
divBackground.style.width = '360px';
divBackground.style.height = '50px';
divBackground.style.backgroundColor = 'white';

for (var c = 0; c < 6; c += 1) {
  var newBoxColor = makeElement('div');
  newBoxColor.className = 'box-background'
  newBoxColor.style.border = 'solid black 2px';
  newBoxColor.style.width = '50px';
  newBoxColor.style.height = '40px';
  newBoxColor.style.display = 'inline-block'
  newBoxColor.style.margin = '3px'

  divBackground.appendChild(newBoxColor);
}

const boxes = document.getElementsByClassName('box-background');

boxes[0].classList.add('red');
boxes[1].classList.add('purple');
boxes[2].classList.add('green');
boxes[3].classList.add('black');
boxes[4].classList.add('salmon');
boxes[5].classList.add('white');


boxes[0].addEventListener('click', function() {
  localStorage.setItem('background', 'red');
  body.style.backgroundColor = localStorage.getItem('background');
});
boxes[1].addEventListener('click', function() {
  localStorage.setItem('background', 'purple');
  body.style.backgroundColor = localStorage.getItem('background');
});
boxes[2].addEventListener('click', function() {
  localStorage.setItem('background', 'darkgreen');
  body.style.backgroundColor = localStorage.getItem('background');
});
boxes[3].addEventListener('click', function() {
  localStorage.setItem('background', 'black');
  body.style.backgroundColor = localStorage.getItem('background');
});
boxes[4].addEventListener('click', function() {
  localStorage.setItem('background', 'salmon');
  body.style.backgroundColor = localStorage.getItem('background');
});
boxes[5].addEventListener('click', function() {
  localStorage.setItem('background', 'whitesmoke');
  body.style.backgroundColor = localStorage.getItem('background');
});

body.style.backgroundColor = localStorage.getItem('background');

let fundText = makeElement('div');
fundText.style.backgroundColor = 'white'
fundText.style.width = '362px'
let textColor = makeElement('h2');
textColor.innerText = 'Font Color';
fundText.appendChild(textColor);
const boxFontColor = makeElement('div');
textColor.appendChild(boxFontColor);
boxFontColor.style.border = 'solid black 1px';
boxFontColor.style.width = '360px';
boxFontColor.style.height = '50px';
boxFontColor.style.backgroundColor = 'white';

textColor.style.margin = '10px 0 0 0';
for (var c = 0; c < 6; c += 1) {
  var newBoxColor = makeElement('div');
  newBoxColor.className = 'box-font'
  newBoxColor.style.border = 'solid black 2px';
  newBoxColor.style.width = '50px';
  newBoxColor.style.height = '40px';
  newBoxColor.style.display = 'inline-block'
  newBoxColor.style.margin = '3px'

  boxFontColor.appendChild(newBoxColor);
}


let boxFontColorClass = document.getElementsByClassName('box-font');

boxFontColorClass[0].classList.add('red');
boxFontColorClass[1].classList.add('purple');
boxFontColorClass[2].classList.add('green');
boxFontColorClass[3].classList.add('black');
boxFontColorClass[4].classList.add('salmon');
boxFontColorClass[5].classList.add('white');

boxFontColorClass[0].addEventListener('click', function() {
  localStorage.setItem('font-color', 'red');
  paragraph.style.color = localStorage.getItem('font-color');
});
boxFontColorClass[1].addEventListener('click', function() {
  localStorage.setItem('font-color', 'purple');
  paragraph.style.color = localStorage.getItem('font-color');
});
boxFontColorClass[2].addEventListener('click', function() {
  localStorage.setItem('font-color', 'darkgreen');
  paragraph.style.color = localStorage.getItem('font-color');
});
boxFontColorClass[3].addEventListener('click', function() {
  localStorage.setItem('font-color', 'black');
  paragraph.style.color = localStorage.getItem('font-color');
});
boxFontColorClass[4].addEventListener('click', function() {
  localStorage.setItem('font-color', 'salmon');
  paragraph.style.color = localStorage.getItem('font-color');
});
boxFontColorClass[5].addEventListener('click', function() {
  localStorage.setItem('font-color', 'whitesmoke');
  paragraph.style.color = localStorage.getItem('font-color');
});