const currentHour = 5;
let message = '';

if (currentHour >= 22 ) {
  message = 'We shouldn\'t eat nothing, it is time to go sleep';
}
else if (currentHour >= 18 && currentHour < 22) {
  message = 'Itadakimasu! let\'s dinner';
}
else if (currentHour >= 14 && currentHour < 18) {
  message = 'We should cook a cake!';
}
else if (currentHour >= 11 && currentHour < 14) {
  message = 'Time to lunch';
}
else if (currentHour >= 4 && currentHour < 11) {
  message = 'It smells a coffee!';
}

console.log(message)