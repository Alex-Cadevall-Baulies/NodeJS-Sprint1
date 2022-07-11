
function sum(validatedArray)
validateArray (validatedArray)
{const sum = validatedArray.reduce((previousValue, currentValue) => previousValue + currentValue)
return sum}

function substract(validatedArray) {const substract = validatedArray.reduce((previousValue, currentValue) => previousValue - currentValue)
    return substract}

function multiply(validatedArray) {const multiply = validatedArray.reduce((previousValue, currentValue) => previousValue * currentValue)
    return multiply}

function divide(validatedArray) {const divide = validatedArray.reduce((previousValue, currentValue) => previousValue / currentValue)
    return divide}



//funció per validar array
function validateArray (validatedArray) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzç"
    for (const letter of alphabet) {
    if (numberArray.includes(letter)) {throw Error (`El array conté lletres`)}
    }

    let numberArrayLength = numberArray.length
    if (numberArrayLength < 2) {throw Error (`El array conté menys de dos nombres`)}

    if (numberArray.includes(null)) {throw Error (`El array conté un element Null`)}

    if (!numberArray.includes(undefined)) {throw Error (`El array conté un element undefined`)}

    return validatedArray
}

module.exports = {sum, substract, multiply, divide}
