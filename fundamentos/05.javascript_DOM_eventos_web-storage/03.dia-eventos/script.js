function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// // exer 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let ul = document.querySelector('#days');
function cElementLi() {
  for (let c = 0; c < dezDaysList.length; c += 1) {
    let numb = document.createElement('li')
    numb.innerText = dezDaysList[c];
    numb.className = 'day';
    if (numb.innerText == 24 || numb.innerText == 25 || numb.innerText == 31) {
      numb.classList.add('holiday');
    }
    if (numb.innerText == 4 || numb.innerText == 11 || numb.innerText == 18 || numb.innerText == 25) {
      numb.classList.add('friday');
    }
    ul.appendChild(numb);
  }
}

cElementLi();

// ===========================================================================


function buttonHoliday(string) {
  let button = document.createElement('button');
  button.innerText = string;
  button.setAttribute('id', 'btn-holiday');
  let dad = document.querySelector('.buttons-container');
  dad.appendChild(button);
}

buttonHoliday('Feriados');

// ===========================================================================

let button = document.querySelector('#btn-holiday');

function changeBackgroundHoliday(){
  let holidays = document.querySelectorAll('.holiday');
  for (c = 0; c < holidays.length; c += 1) {
    if (holidays[c].style.backgroundColor == '') {
      holidays[c].style.backgroundColor = 'green';
      holidays[c].style.color = 'white';
    }
    else {
      holidays[c].style.backgroundColor = '';
      holidays[c].style.color = '';
    }
  }
}

button.addEventListener('click', changeBackgroundHoliday);

// ===========================================================================

function makeButtonFriday(str) {
  let button = document.createElement('button');
  button.innerText = str;
  button.setAttribute('id', 'btn-friday')
  dad = document.querySelector('.buttons-container');
  dad.appendChild(button);

}
makeButtonFriday('Sexta-feira');

// ===========================================================================


let buttonFriday = document.getElementById('btn-friday');

function changeBackgroundFriday(){
  let fridays = document.getElementsByClassName('friday');
  const list = [4, 11, 18, 25];
  for (c = 0; c < fridays.length; c += 1) {
    if (fridays[c].innerText == list[c]) {
      fridays[c].innerText = 'sextouu';
      fridays[c].style.color = 'salmon';
    }
    else {
      fridays[c].innerText = list[c];
      fridays[c].style.color = ''
    }
  }
}
buttonFriday.addEventListener('click', changeBackgroundFriday);

// ===========================================================================


const days = document.getElementsByClassName('day');
for (let index = 0; index < days.length; index += 1) {
  days[index].addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '40px';
  });
  days[index].addEventListener('mouseleave', function (event){
    event.target.style.fontSize = '';
  });
}

// ===========================================================================

function newTask(str) {
  str = document.getElementById('task-input');
  let dad = document.getElementsByClassName('my-tasks')[0];
  let task = document.createElement('span');

  task.innerText = ` ${str.value} \n`;
  dad.appendChild(task);
  }
let buttonAdd = document.getElementById('btn-add');
buttonAdd.addEventListener('click', newTask);

// ===========================================================================

function changeColor(color) {
  var newDiv = document.createElement('div');
  newDiv.className = 'task';
  newDiv.style.backgroundColor = color;
  var dad = document.getElementsByClassName('my-tasks')[0];
  dad.appendChild(newDiv);


}
changeColor('red');

// ===========================================================================

let legendTask = document.getElementsByClassName('task');
for (let c = 0; c < legendTask.length; c += 1) {
  legendTask[c].addEventListener('click', function(event) {
    for (let i in legendTask) {
      legendTask[i].className = 'task';
    }
    var alvo = event.target;
    alvo.classList.add('selected');
  });
}

// ===========================================================================

let buttonDay = document.getElementsByClassName('day');

function addBackground(event) {
  let alvo = event.target;
  if (alvo.style.color == '') {
    var element = document.getElementsByClassName('selected')[0];
    var cssObj = window.getComputedStyle(element, null);
    var bgColor = cssObj.getPropertyValue("background-color");
    alvo.style.color = bgColor;
  } 
  else {
    alvo.style.color = '';
  }
}

for (let i in buttonDay) {
  buttonDay[i].addEventListener('click', addBackground);
}

// ===========================================================================