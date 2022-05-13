let text = 'pan';
text = text.toLowerCase();
let move = '';

if (text == 'king') {
  move = 'all directions just a square';
}

else if (text == 'queen') {
  move = 'all directions any square';
}

else if (text == 'rook') {
  move = 'just in front and sides';
}

else if (text == 'bishop') {
  move = 'diagonals';
}

else if (text == 'knight') {
  move = 'two squares in front and a side ';
}

else if (text == 'pawn') {
  move = 'one square in front';
}

else {
  move = 'error the piece is not found ';
}

console.log(`${text}, ${move}`);