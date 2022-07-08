// nivell 1 - exercici 1
(() => {let result = 1 + 14; console.log(result)})()

//nivell 2 - exercici 1
let object = (parameter) => {const message = {frase : parameter}; return message}
console.log(object(`Aquesta frase es el meu paràmetre.`))

//nivell 2 - exercici 2
class Persona {
    #name
    constructor (name) {
        this.#name = name
    }
    getName(){
        console.log(this.#name)
    }
}

let persona = new Persona ('Àlex')
persona.getName()

//nivell 3 - exercici 1
class Person {
    constructor (){
        throw new Error ('You shall not create a class!')
    }
}

function createName(name) {
let nameId = Object.create(Person.prototype)
nameId.name = name
return nameId
}

let alex = createName('Àlex')
let merche = createName('Merche')

console.log(alex instanceof Person, alex.name);
console.log(merche instanceof Person, merche.name);