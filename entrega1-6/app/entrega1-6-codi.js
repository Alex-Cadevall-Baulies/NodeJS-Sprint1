
const sum = function sum(numberArray) 
{const sum = numberArray.reduce((previousValue, currentValue) => previousValue + currentValue)
return console.log(sum)}

const substract = function substract(numberArray) {const substract = numberArray.reduce((previousValue, currentValue) => previousValue - currentValue)
    return console.log(substract)}

const multiply = function multiply(numberArray) {const multiply = numberArray.reduce((previousValue, currentValue) => previousValue * currentValue)
    return console.log(multiply)}

const divide = function divide(numberArray) {const divide = numberArray.reduce((previousValue, currentValue) => previousValue / currentValue)
    return console.log(divide)}


