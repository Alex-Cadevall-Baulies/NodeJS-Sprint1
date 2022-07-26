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
            resolve(idName)
        } else {
            let error = `No hem trobat cap empleat amb el ID ${chosenID} a la nostra base de dades.`
            reject(error)
        }
    })
}

//nivell 2 - exercici 2
const getSalary = employee => {
    return new Promise((resolve, reject) => {

        const idSalaries = salaries.find(salaries => salaries.id === employee.id)

        if (idSalaries !== undefined) {
            resolve(idSalaries)
        } else {
            let error = `El empleat ${employee.name} no disposa de salari.`
            reject(error)
        }
    })
}

//nivell 2 - exercici 3

getEmployee(chosenID).then(idName => {
    console.log(`El ID ${chosenID} correspon a ${idName.name}`);
    return idName
}).catch(err => {console.log(err); return err})

/*
getSalary(idName).then(idSalaries => {
        console.log(idSalaries);
        return idSalaries
    }).catch(err => {console.log(err); return err})*/


module.exports = {
    getSalary,
    getEmployee
}