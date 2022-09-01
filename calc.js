/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

  function recebeValor(value){
    const F = value.toUpperCase().includes('F')
    const C = value.toUpperCase().includes('C')

    if (!F && !C) {
      throw new Error(`Não foi identificado a letra ${value}`)
    }
    }
    try{
      recebeValor('50F')
      recebeValor('50J')
    } catch(error){
      console.log(error.message)
    }
  