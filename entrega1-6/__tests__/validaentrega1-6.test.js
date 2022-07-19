const { sum, substract, multiply, divide } = require('../app/entrega1-6-codi')
const {namePlusSalary, isBookClubFree} = require('../../entrega1-4')

//test entrega 1-6 (operacions)
describe("sum tests", () => {
    test("validate if sum works with numbers", () => { expect(sum([1, 1])).toBe(2) });
    test("validate if sum rejects letters", () => { expect(() => sum([1, "a"])).toThrow(`El array conté lletres`) })
    test("validate if sum rejects special characters", () => { expect(() => sum([1, "/"])).toThrow(`El array conté caràcters especials`) })
    test("validate if sum rejects array < 2", () => { expect(() => sum([1])).toThrow(`El array conté menys de dos nombres`) })
    test("validate if sum rejects null", () => { expect(() => sum([1, null])).toThrow(`El array conté un element Null`) })
    test("validate if sum rejects undefined", () => { expect(() => sum([1, undefined])).toThrow(`El array conté un element undefined`) })
})

describe("substract tests", () => {
    test("validate if substract works with numbers", () => { expect(substract([1, 1])).toBe(0) });
    test("validate if substract rejects letters", () => { expect(() => substract([1, "a"])).toThrow(`El array conté lletres`) })
    test("validate if substract rejects special characters", () => { expect(() => substract([1, "/"])).toThrow(`El array conté caràcters especials`) })
    test("validate if substract rejects array < 2", () => { expect(() => substract([1])).toThrow(`El array conté menys de dos nombres`) })
    test("validate if substract rejects null", () => { expect(() => substract([1, null])).toThrow(`El array conté un element Null`) })
    test("validate if substract rejects undefined", () => { expect(() => substract([1, undefined])).toThrow(`El array conté un element undefined`) })
})

describe("divide tests", () => {
    test("validate if divide works with numbers", () => { expect(divide([1, 1])).toBe(1) });
    test("validate if divide rejects letters", () => { expect(() => divide([1, "a"])).toThrow(`El array conté lletres`) })
    test("validate if divide rejects special characters", () => { expect(() => divide([1, "/"])).toThrow(`El array conté caràcters especials`) })
    test("validate if divide rejects array < 2", () => { expect(() => divide([1])).toThrow(`El array conté menys de dos nombres`) })
    test("validate if divide rejects null", () => { expect(() => divide([1, null])).toThrow(`El array conté un element Null`) })
    test("validate if divide rejects undefined", () => { expect(() => divide([1, undefined])).toThrow(`El array conté un element undefined`) })
})

describe("multiply tests", () => {
    test("validate if multiply works with numbers", () => { expect(multiply([1, 1])).toBe(1) });
    test("validate if multiply rejects letters", () => { expect(() => multiply([1, "a"])).toThrow(`El array conté lletres`) })
    test("validate if multiply rejects special characters", () => { expect(() => multiply([1, "/"])).toThrow(`El array conté caràcters especials`) })
    test("validate if multiply rejects array < 2", () => { expect(() => multiply([1])).toThrow(`El array conté menys de dos nombres`) })
    test("validate if multiply rejects null", () => { expect(() => multiply([1, null])).toThrow(`El array conté un element Null`) })
    test("validate if multiply rejects undefined", () => { expect(() => multiply([1, undefined])).toThrow(`El array conté un element undefined`) })
})

//test entrega 1-4 (Async / Await)

/* coses a testejar:
- get employee:
    - Que agafi bé el ID
    - Que pasa si busco quelcom que no es un nombre (ID)
    - Que pasa si li envio algo amb el nom employee

- get salary:
    - Que agafi bé el ID
    - Que pasa si busco quelcom que no es un nombre (ID)
    - Que pasa si li envio algo amb el nom salary

- namePlusSalary:
    - Que agafi bé el ID
    - Que pasa si busco quelcom que no es un nombre (ID)

-  bookClubBooking 
 -  que pasa si li envio false 
 - que pasa si li envio algo que no sigui true o false (tru is not defined)
 */


 describe("name & salary test", () => {
    test("validate if correct ID resolve works properly", async () => {expect(namePlusSalary(2)).toBeInstanceOf(Promise);
    return expect( await namePlusSalary(2)).resolves.toEqual(`El ID 2 correspon a Bill Gates amb salari 1000`)})
    })

test("validate if correct ID resolve works properly", async () => {delayedResolveFunction = jest.fn();
await namePlusSalary(delayedResolveFunction);  expect(delayedResolveFunction.mock.calls.length).toBe(1)})


/* 
var { delayedResolve, delayedExec } = require('../app/e4n1e2');

jest.setTimeout(10000); //Pq no em salti el limit de timeout

// console.log(`${jest.isMockFunction(delayedExec)} ${jest.isMockFunction(delayedResolve)}`);
describe(`Comprova que fa tot el que demana el enunciat`, () => {
    test(`Comprova que la asíncrona (delayedExec) crida a l'altra`, async () => {
        delayedResolveMock = jest.fn();
        await delayedExec(delayedResolveMock);
        // expect(delayedResolve).toHaveBeenCalledTimes(1);
        expect(delayedResolveMock.mock.calls.length).toBe(1);
        //Pq .calls.length es 0 :( 
        //ho era pq per molt que faci la assignacio delayedResolve = jest.fn(); aquí, quan s'executa el delayedExec crida al 
        //delayedResolve d'allà, que no es una mock. Per solucionar-ho fem que delayedExec rebi delayedResolve com a callback    
    });
    test(`Comprova que l'altra (delayedResolve) torna una Promise, i que la promise es resol amb el valor esperat`, () => {
        expect(delayedResolve()).toBeInstanceOf(Promise);
        return expect(delayedResolve()).resolves.toBe(`M'he resolt!`);
    });
    test(`Comprova que la promise de delayedResolve triga mínim 2 seconds a resoldre's`, async () => {
        jest.useFakeTimers();
        delayedResolveMock = jest.fn(() => {
            console.log(`Començo a esperar per resoldre'm...(Mock)`);
            return new Promise((res, rej) => {
                setTimeout(() => res(String(`M'he resolt!`)), 2000);
                jest.advanceTimersByTime(2000);
                // jest.advanceTimersByTime(1000); //Si comentes la linia de dalt i descomentes aquesta, el test dona timeout
            });
        });
        return expect(delayedResolveMock()).resolves.toBe(`M'he resolt!`);
    });
});
describe(`Comportaments si les crides de formes rares`, () => {
    test(`Si la promesa falla, atrapa i mostra el message del Error`, async () => {
        mockReject = jest.fn(() => {
            return new Promise((res, rej) => {
                if (!true)
                    res(`Aixo no hauria de passar mai`);
                else
                    rej(new Error(`Sóc un error message`));
            });
        });
        mockDelayedExec = jest.fn(async (fun) => {
            try {
                const str = await fun();
                return(str);
            }
            catch (err) {
                return (err);
            }
        });
        expect(mockDelayedExec(mockReject)).resolves.toMatchObject(new Error(`Sóc un error message`)); //Utilitzo el resolve pq no ha llençat el error, l'ha retornat
    });
});
*/