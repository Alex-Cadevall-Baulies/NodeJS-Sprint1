//nivell 1 - exercici 1

const isWaterType = 'Mudkip'
const waterStarter = new Promise ((resolve, reject) => {
    if(isWaterType === !'Squirtel' || !'Totodile' || !'Mudkip') {
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

getEmployee
.then(idName => console.log(`El ID ${chosenID} correspón a ${idName.name}`))
.catch(idInformation => console.log(idInformation))

//nivell 2 - exercici 2

const getSalary = idName => {
    const idSalary = salaries.find(salaries => salaries.id === idName.id)
    const message = `El salari de ${idName.name} és ${idSalary.salary}€.`
    return Promise.resolve(message)
    }

//nivell 2 - exercici 3
getEmployee
    .then(getSalary)
    .then(resolve => console.log(resolve))
    .catch(idInformation => console.log(idInformation))
