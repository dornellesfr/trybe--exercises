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