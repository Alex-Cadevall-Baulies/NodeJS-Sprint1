
function sum(array){
const validatedArray = validateArray (array)
const sum = validatedArray.reduce((previousValue, currentValue) => previousValue + currentValue)
return sum}

function substract(validatedArray) {const substract = validatedArray.reduce((previousValue, currentValue) => previousValue - currentValue)
    return substract}

function multiply(validatedArray) {const multiply = validatedArray.reduce((previousValue, currentValue) => previousValue * currentValue)
    return multiply}

function divide(validatedArray) {const divide = validatedArray.reduce((previousValue, currentValue) => previousValue / currentValue)
    return divide}

//codi per exportar
module.exports = {sum, substract, multiply, divide}

//funció per validar el array
function validateArray (array) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzç"
    for (const letter of alphabet) {
        if (array.includes(letter)) {throw new Error (`El array conté lletres`)}
    }
    let arrayLength = array.length
    if (arrayLength < 2) {throw new Error (`El array conté menys de dos nombres`)}
    
    if (array.includes(null)) {throw new Error (`El array conté un element Null`)}
    
    if (array.includes(undefined)) {throw new Error (`El array conté un element undefined`)}
    
    return array
}
