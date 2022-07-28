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

//nivell 1 - exercici 1
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

async function namePlusSalary(chosenID) {

    try {
        const employee = await getEmployee(chosenID)
        const salary = await getSalary(employee)
        console.log(`El ID ${chosenID} correspon a ${employee.name} amb salari ${salary.salary}`)

    } catch (error) {
        console.log(error);
    }

}

namePlusSalary(chosenID)


//nivell 1 - exercici 2

const isBookClubAvailable = true

const bookClubBooking = (isBookClubAvailable) => {
    return new Promise((resolve, reject) => {
        if (isBookClubAvailable === true) {
            const newReservation = {
                name: 'Bilbo MC Swaggings',
                genre: 'fashion and design',
                location: 'right wing'
            }
            setTimeout(() => {
                resolve(newReservation)
            }, 2000)

        } else {
            let error = `El club està reservat en aquests moments. Prova un altre horari.`
            reject(error)
        }
    })
}

async function isBookClubFree(isBookClubAvailable) {

    try {
        const reservation = await bookClubBooking(isBookClubAvailable)
        console.log(reservation)

    } catch (error) {
        console.log(error);
    }
}

isBookClubFree(isBookClubAvailable)


//nivell 2 - exercici 2

const number1 = 2
const number2 = 4
const number3 = 6

const doubleNumber = number1 => {
    return new Promise((resolve) => {
        const double = number1 * number1
        setTimeout(() => {
            resolve(double)
        }, 2000)
    })
}

async function threeTimesDouble(number1, number2, number3) {
    const doubleOfFirst = await doubleNumber(number1)
    const doubleOfSecond = await doubleNumber(number2)
    const doubleOfThird = await doubleNumber(number3)
    const totalSum = doubleOfFirst + doubleOfSecond + doubleOfThird
    console.log(totalSum)
}

threeTimesDouble(number1, number2, number3)
