function sum(validatedArray) 
{const sum = validatedArray.reduce((previousValue, currentValue) => previousValue + currentValue)
return sum}

function substract(validatedArray) {const substract = validatedArray.reduce((previousValue, currentValue) => previousValue - currentValue)
    return substract}

function multiply(validatedArray) {const multiply = validatedArray.reduce((previousValue, currentValue) => previousValue * currentValue)
    return multiply}

function divide(validatedArray) {const divide = validatedArray.reduce((previousValue, currentValue) => previousValue / currentValue)
    return divide}

module.exports = {sum, substract, multiply, divide}
