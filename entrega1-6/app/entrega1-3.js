//nivell 1 - exercici 1
//truthy falsey expersions

const isWaterType = 'Totodile'
const waterStarter = new Promise ((resolve, reject) => {
    if(isWaterType === !'Squirtel' || isWaterType === !'Totodile' || isWaterType === !'Mudkip') {
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
const victory = false

let gotMedal = (victory, medal)  => {
    if (victory) {
        let message = `Has aconseguit la medalla tipus ${medal}!`
        return(message)
    }
    else {
        let error = `No has aconseguit la medalla tipus ${medal}. ${trainer} et diu que segueixis entrenant dur!`
        return(error)
        
}
}

const medalInfo = (medal, trainer, callback) => {
    const medalInfo = `${medal} de ${trainer}`

    try {
        let message = gotMedal(medalInfo)
        return(message)
    }

    catch {
        let message = gotMedal(medalInfo)
        return(message)
    }
}


//nivell 2

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
},
{
    id: 4,
    name: 'Lolita Worster'
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
},
{
    id: 5,
    salary: 5000
}];
//nivell 2 - exercici 1
let chosenID = 3

const getEmployee = chosenID => {
    return new Promise((resolve, reject) => {
        const idName = employees.find(employees => employees.id === chosenID)

        if (idName !== undefined) {
            resolve(idName)
        }

        else {
            const idSalary = salaries.find(salary => salary.id === chosenID)
            let error

            if (idSalary !== undefined) {
                error = `El ID ${chosenID} no disposa de empleat pero sí d'un salari de ${idSalary.salary}`
                reject(error)
            }

            else{
            error = `No hem trobat cap empleat amb el ID ${chosenID} a la nostra base de dades.`
            reject(error)
            }
        }
    })
}

//nivell 2 - exercici 2
const getSalary = employee => {
    return new Promise((resolve, reject) => {

        const idSalaries = salaries.find(salaries => salaries.id === employee.id)

        if (idSalaries !== undefined) {
            resolve(idSalaries)
        }

        else {
            let error = `El empleat ${employee.name} no disposa de salari.`
            reject(error)
        }
    })
}

//nivell 2 - exercici 3

async function namePlusSalary(chosenID) {

    try {
        const employee = await getEmployee(chosenID)
        const salary = await getSalary(employee)
        return `El ID ${chosenID} correspon a ${employee.name} amb salari ${salary.salary}`

    } catch (error) {
        console.log(error);
    }

}

namePlusSalary(chosenID)

//nivell 3 - exercici1
    .catch(idInformation => console.log(idInformation))

module.exports = {medalInfo, gotMedal, getSalary, getEmployee, namePlusSalary}