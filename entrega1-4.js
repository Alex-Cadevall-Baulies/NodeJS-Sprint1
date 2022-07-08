
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
const chosenID = 2

const getEmployee = chosenID => {
return new Promise ((resolve, reject) => {
    const isIdTrue =  employees.find(employees => employees.id === chosenID)
    
    if (isIdTrue !== undefined) {
    const idName = employees.find(employees => employees.id === chosenID)
    resolve(idName)
    }
    
else {
    let error = `El ID ${chosenID} no es troba a la nostra base de dades.`
    reject(error)
}
})}

getEmployee(chosenID)
.then(idName => console.log(`El ID ${chosenID} correspón a ${idName.name}`))
.catch(idInformation => console.log(idInformation))


const getSalary = chosenID => {
    return new Promise ((resolve, reject) => {
        const isIdTrue =  salaries.find(salaries => salaries.id === chosenID)
        
        if (isIdTrue !== undefined) {
        const idSalaries = salaries.find(salaries => salaries.id === chosenID)
        resolve(idSalaries)
        }
        
    else {
        let error = `El ID ${chosenID} no es troba a la nostra base de dades.`
        reject(error)
    }
})}

getSalary(chosenID)
.then(idSalaries => console.log(`El salari del ID ${chosenID} correspón a ${idSalaries.salary}`))
.catch(idInformation => console.log(idInformation))

async function namePlusSalary(chosenID) {
    const employee = await getEmployee(chosenID)
    const salary = await getSalary(chosenID)
    console.log(`El ID ${chosenID} correspon a ${employee.name} amb salari ${salary.salary}`)
}

namePlusSalary(chosenID)

/*
//nivell 1 - exercici 2

const isBookClubAvailable = true

const bookClubBooking = new Promise((resolve, reject) => {
    if (isBookClubAvailable) {
        const newReservation = {
            name: 'Bilbo MC Swaggings',
            genre: 'fashion and design',
            location: 'right wing'
        }
        setTimeout(() => {
            resolve(newReservation)
        }, 2000)
    } else {
        let error = `Book club is booked at that time`
        reject(error)
    }
})

bookClubBooking
    .then(meetingconfirmation => console.log(meetingconfirmation))
    .catch(error => console.log(error))

//nivell 2 - exercici 2

const number1 = 2
const number2 = 4
const number3 = 6

function doubleNumber(number1) {
    setTimeout(() => {
        return console.log(number1 * number1)
    }, 2000)
}

doubleNumber(number1)

function threeTimesDouble(number1, number2, number3) {
    return console.log(doubleNumber(number1), doubleNumber(number2), doubleNumber(number3))
}

threeTimesDouble(number1, number2, number3)*/