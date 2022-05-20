let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// // ex01
// console.log(`Welcome, ${info['personagem']}`)

// ex02 
info['recorrente'] = 'Sim'
// console.log(info)

// // ex03
// for (let i in info) {
//     console.log(i)
// }

// // ex04
// for (let i in info) {
//     let a = info[i]
//     console.log(a)
// }

// ex05
let inf = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas and Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

for (let i in info, inf) {
    let statusInfo = info[i]
    let statusInf = inf[i]
    if (inf[i] == info['recorrente']) {
        if (inf['recorrente'] === info['recorrente']) {
            console.log('Ambos recorrentes')
        }    
    }
    else {
        console.log(`${statusInfo} e ${statusInf}`)
    }
}
