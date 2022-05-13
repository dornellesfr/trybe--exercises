let note = 67; 
let ans = '';

if (note >= 90 && note <= 100) {
  ans = 'note - > A';
}
else if (note >= 80 && note < 90) {
  ans = 'note -> B';
}
else if (note >= 70 && note < 80) {
  ans = 'note -> C';
}
else if (note >= 60 && note < 80) {
  ans = 'note -> D';
}
else if (note >= 50 && note < 60) {
  ans = 'note -> E';
}
else if (note < 50 && note > 0) {
  ans = 'note -> F';
}
else {
  ans = 'Type a existing note';
}

console.log(ans)