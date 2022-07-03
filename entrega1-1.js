const firstName = 'Alex'
const surname = 'Cadevall Baulies'
const userCode = "ACB"

userNameAndSurname(firstName, surname)
sayHiMessage(firstName, surname)
provideUserName()
countArray()
//trobaràs el nivell 3 - exercici 2 al final

//Nivell 1 - exercici 1
function userNameAndSurname(name, surname) {console.log(name, surname)}

//nivell 2 - exercici 1
function sayHiMessage (name, surname) {
    let firstName = name
    let lastName = surname
    let message = `Hola ${firstName} ${lastName} espero que tinguis un bon dia.`
    console.log(message)
}

//nivell 2 - exercici 2
function provideUserName (userCode) {return console.log(`Veig que tornes a estar aqui! ${sayHiMessage(firstName, surname)}`)}

//nivell 3 - exercici 1
function countArray(){
    const numberArray = []
    let i 

    for (i=0; i<10; i++) {
        numberArray.push(numberCount())
    }
    
    console.log(numberArray)
}

function numberCount() {
    let message = ''
    let i

    for (i = 0; i < 10; i++) {
        message += String(i)
        console.log(message)
    }
    return message
}

//nivell 3 - exercici 2
const returnUserCode = function (userCode) {return userCode}
console.log(returnUserCode(userCode))