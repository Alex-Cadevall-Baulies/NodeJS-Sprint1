function validateArray (numberArray) {
    let noLetters = false
    const alphabet = "abcdefghijklmnopqrstuvwxyzç"
    for (const letter of alphabet) {
    if (!numberArray.includes(letter)) {noLetters = true}
    }

    let moreThanOneNumber = false
    let numberArrayLength = numberArray.length
    if (numberArrayLength >= 2) {moreThanOneNumber = true}

    let noNull = false
    if (!numberArray.includes(null)) {noNull = true}

    let noUndefined = false 
    if (!numberArray.includes(undefined)) {noUndefined = true}

    const validArray = noLetters && moreThanOneNumber && noNull && noUndefined
    return validArray
}

module.exports = validateArray