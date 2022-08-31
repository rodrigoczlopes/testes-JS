
let nota1 = 90

function getScore(nota1){
  let notaA = nota1 >= 90;
  let notaC = nota1 >= 70 && nota1 <= 79;
  let notaB = nota1 >= 80 && nota1 <=89;
  let notaD = nota1 >=60 && nota1 <=69;
  let notaE = nota1 <= 60;

  let scoreFinal;

  if(notaA){
    scoreFinal = "A"
  }else if(notaB){
    scoreFinal = "B"
  }else if(notaC){
    scoreFinal = "C"
  }else if (notaD){
    scoreFinal = "D"
  }else if(notaE){
    scoreFinal = "F"
  }else{
    scoreFinal = "Só aceitamos números"
  }
  return scoreFinal
} 

console.log(getScore(100))
console.log(getScore(-1))
console.log(getScore('A'))
console.log(getScore(65))
console.log(getScore(90))


// switch(nota1){
//   case "notaA":
//     console.log("A")
//   break;
//   case "notaB":
//     console.log("B")
//   break;
//   case "notaC":
//     console.log("C")
//   break;
//   case "notaD":
//     console.log("D")
//   break;
//   case "notaE":
//     console.log("E")
//   break;
//   default:
//     console.log("Só aceitamos números")
// }

