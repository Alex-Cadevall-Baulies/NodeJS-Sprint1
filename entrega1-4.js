let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

//nivell 1 - exercici 1

const chosenID = 3
const getEmployee = new Promise ((resolve, reject) => {
    const isIdTrue =  employees.find(employees => employees.id === chosenID)
    
    if (isIdTrue !== undefined) {
    const idName = employees.find(employees => employees.id === chosenID)
    resolve(idName)
    }
    
else {
    let error = `El ID ${chosenID} no es troba a la nostra base de dades.`
    reject(error)
}
})

const getSalary = idName => {
    const idSalary = salaries.find(salaries => salaries.id === idName.id)
    const message = `El salari de ${idName.name} és ${idSalary.salary}€.`
    return Promise.resolve(message)
    }

setTimeout (() => {
getEmployee
    .then(getSalary)
    .then(resolve => console.log(resolve))
    .catch(idInformation => console.log(idInformation))
}, 3000)
