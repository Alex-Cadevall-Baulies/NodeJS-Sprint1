const sum = function sum(validatedArray) 
{const sum = validatedArray.reduce((previousValue, currentValue) => previousValue + currentValue)
return console.log(sum)}

const substract = function substract(validatedArray) {const substract = validatedArray.reduce((previousValue, currentValue) => previousValue - currentValue)
    return console.log(substract)}

const multiply = function multiply(validatedArray) {const multiply = validatedArray.reduce((previousValue, currentValue) => previousValue * currentValue)
    return console.log(multiply)}

const divide = function divide(validatedArray) {const divide = validatedArray.reduce((previousValue, currentValue) => previousValue / currentValue)
    return console.log(divide)}

module.exports = sum
module.exports = substract
module.exports = multiply
module.exports = divide
