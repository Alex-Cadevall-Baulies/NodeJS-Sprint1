//nivell 1 - exercici 1

const isWaterType = 'Squirtel'
const waterStarter = new Promise ((resolve, reject) => {
    if(isWaterType !== 'Squirtel' | 'Totodile' | 'Mudkip') {
        let message = `${isWaterType} no es tipus aigua!`
        resolve(message);
    } 
else {
    message = `${isWaterType} es tipus aigua, endevant entrenador!`
    reject(message)
}
});

waterStarter
    .then(resolve => {console.log(resolve)})
    .catch (correctAnswer => {console.log(correctAnswer)})


//nivell 1 - exercici 2

let howManyMedals = medal  => console.log(`Has aconseguit la medalla tipus ${medal}!`)

const medalInfo = (medal, trainer, callback) => {
    const medalInfo = `${medal} de ${trainer}`
    callback (medalInfo);
}
medalInfo('Planta', 'Erika', howManyMedals)


//nivell 2

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

//nivell 2 - exercici 1
const chosenID = 2
const getEmployee = new Promise ((resolve, reject) => {
    const isIdTrue =  employees.find(employees => employees.id === chosenID)
    
    if (isIdTrue !== undefined) {
    const idName = employees.find(employees => employees.id === chosenID)
    const idSalary = salaries.find(salaries => salaries.id === chosenID)
    const NameSalary = []
    NameSalary.push(idName.name)
    NameSalary.push(idSalary.salary)
    resolve(NameSalary)
    }
    
else {
    let error = `El ID ${chosenID} no es troba a la nostra base de dades.`
    reject(error)
}
})

getEmployee
.then(resolve => console.log(resolve))
.catch(idInformation => console.log(idInformation))

//nivell 2 - exercici 2

const employeeName = 'Linux Torvalds'
const getSalary = new Promise ((resolve, reject) => {
    const isIdTrue =  employees.find(employees => employees.name === employeeName)
    
    if (isIdTrue !== undefined) {
    const idName = employees.find(employees => employees.name === employeeName)
    const idSalary = salaries.find(salaries => salaries.id === idName.id)
    const message = `El salari de ${employeeName} és ${idSalary.salary}€.`
    resolve(message)
    }
    
else {
    let error = `El nom ${employeeName} no es troba a la nostra base de dades.`
    reject(error)
}
})

getSalary
.then(resolve => console.log(resolve))
.catch(idInformation => console.log(idInformation))

//nivell 2 - exercici 3
getEmployee
.then(getSalary)
.then(resolve => console.log(resolve))

.catch(idInformation => console.log(idInformation))
