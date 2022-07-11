const { isNumber } = require("util")

function validateArray (numberArray) {
    let noLetters = false
    const alphabet = "abcdefghijklmnopqrstuvwxyzç"
    for (const letter of alphabet) {
    if (!numberArray.toLowerCase().includes(letter)) {noLetters = true}
    }

    let noNull = false
    if (!numberArray.includes(null)) {noNull = true}

    let noUndefined = false 
    if (!numberArray.includes(undefined)) {noUndefined = true}

    const validArray = noLetters && noNull && noUndefined
    return validArray
}

module.exports = validateArray