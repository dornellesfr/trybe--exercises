// // PRIMEIRA PARTE

// document.getElementById('elementoOndeVoceEsta').parentNode.style.backgroundColor = 'yellow';


// document.getElementById('elementoOndeVoceEsta').firstElementChild.innerHTML = 'Hello Peter';


// console.log(document.getElementById('pai').firstElementChild);


// console.log(document.getElementById('elementoOndeVoceEsta').parentElement.firstElementChild);


// console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);


// console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);


// console.log(document.getElementById('pai').children[3]);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// // SEGUNDA PARTE
// let father = document.querySelector('#pai');
// let whereIAm = document.querySelector('#elementoOndeVoceEsta');
// let createSection = document.createElement('section');


// father.appendChild(createSection); // Criação do irmão do elementoOndeVoceEsta

// whereIAm.appendChild(document.createElement('section')); // Criação de um filho para o elementoOndeVoceEsta

// let sonsSon= whereIAm.firstElementChild.appendChild(document.createElement('section')); // filho do primeiro filho do filho
// sonsSon.className = 'here';

// document.querySelector('.here').parentElement.parentElement.nextElementSibling; // acessando terceiroFilho

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// // TERCEIRA PARTE
// dadsDad = document.getElementById('paiDoPai');
// dad = document.getElementById('pai');
// firstSon = document.getElementById('primeiroFilho');
// whereIAm = document.getElementById('elementoOndeVoceEsta');
// sonOfFirstSon = document.getElementById('primeiroFilhoDoFilho');
// secondAndLastSonOfSon = document.getElementById('segundoEUltimoFilhoDoFilho');
// thirdSon = document.getElementById('terceiroFilho');
// fourthSon = document.getElementById('quartoEUltimoFilho');


// firstSon.remove();
// secondAndLastSonOfSon.remove();
// thirdSon.remove();
// fourthSon.remove();


