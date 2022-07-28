//nivell 1 - exercici 1
//truthy falsey expersions

const isWaterType = 'Totodile'

function waterStarter(isWaterType) {
    return new Promise((resolve, reject) => {
        if (isWaterType === !'Squirtel' || isWaterType === !'Totodile' || isWaterType === !'Mudkip') {
            let message = `${isWaterType} no es tipus aigua!`
            resolve(message);
        } else {
            message = `${isWaterType} es tipus aigua, endevant entrenador!`
            reject(message)
        }
    })
};

waterStarter(isWaterType)
    .then(resolve => {
        console.log(resolve)
    })
    .catch(correctAnswer => {
        console.log(correctAnswer)
    })


//nivell 1 - exercici 2
let gotMedal = (victory, medal, trainer) => {

    if (victory) {
        let message = `Has aconseguit la medalla tipus ${medal}!`
        return (message)
    } else {
        let message = `No has aconseguit la medalla tipus ${medal}. ${trainer} et diu que segueixis entrenant dur!`
        return (message)
    }
}

const medalInfo = (callback, medal, trainer, victory) => {
    const medalInfo = `${medal} de ${trainer}`

    try {
        let message = gotMedal(victory, medalInfo, trainer)
        console.log(message)
    } catch {
        let message = gotMedal(victory, medalInfo, trainer)
        console.log(message)
    }
}

medalInfo(gotMedal, 'foc', 'Blaine', true)


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
    }
];

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
    }
];
//nivell 2 - exercici 1
let chosenID = 3

const getEmployee = chosenID => {
    return new Promise((resolve, reject) => {
        const idName = employees.find(employees => employees.id === chosenID)

        if (idName !== undefined) {
            console.log(`El ID ${chosenID} correspon a ${idName.name}`);
            resolve(idName)
        } else {
            console.log(`No hem trobat cap empleat amb el ID ${chosenID} a la nostra base de dades.`)
            reject(chosenID)
        }
    })
}

//nivell 2 - exercici 2
const getSalary = employee => {
    return new Promise((resolve, reject) => {

        let idSalaries
        if (Number.isInteger(employee) ) {
            idSalaries = salaries.find(salaries => salaries.id === employee)
        }

        else {idSalaries = salaries.find(salaries => salaries.id === employee.id)}

        if (idSalaries !== undefined) {
            console.log(`El salari del ID ${idSalaries.id} correspon a ${idSalaries.salary}€`)
            resolve(idSalaries)
        } else {
            if (Number.isInteger(employee)) {
            console.log(`El empleat amb ID ${employee} no disposa de salari.`)
            reject(employee)
        }
        else {console.log(`El empleat amb ID ${employee.id} no disposa de salari.`)
        reject(employee.id)}
    }})
}

//nivell 2 - exercici 3

getEmployee(5)
.then(getSalary)
.then(idName => {
    return idName
}).catch(getSalary)
.catch(err => {
    return err
})
