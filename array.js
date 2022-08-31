/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo. */

let family = {
  incomes : [1400, 1560, 450],
  expenses : [1500, 594, 159, 55, 20, 27, 100, 40, 140, 89.90, 260]
}
function sum(array){
  var total = 0;

  for(let value of array){
    total += value
  }
  return total
}

function calculateBalance(){
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses
  
  const itsOk = total >= 0

  let balanceText = "negativo"

  if(itsOk) {
    balanceText = "positivo"
  }

  console.log(`O seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()