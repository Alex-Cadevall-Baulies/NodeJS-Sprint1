const { sum, substract, multiply, divide } = require('../app/entrega1-6-codi')
const {getSalary, getEmployee, namePlusSalary, isBookClubFree} = require('../../entrega1-4')

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

jest.setTimeout(10000)


describe("name & salary test", () => {
test("validate if correct ID resolve works properly", async () => {expect(namePlusSalary(2)).toBeInstanceOf(Promise)
    return expect(await namePlusSalary(2).resolves.toEqual(`El ID 2 correspon a Bill Gates amb salari 1000`))})
}) 

describe(`Comprova exercici 1 nivell 1, entrega 1-4`, () => {
    test(`Comprova que la asíncrona (namePlusSalary) crida a les promises`, async () => {
        delayedResolveMock = jest.fn();
        await namePlusSalary(delayedResolveMock);
        expect(delayedResolveMock.mock.calls.length).toBe(1);
    })
    test(`Comprova que getEmployee torna una Promise, i que la promise es resol amb el valor esperat`, () => {
        expect(getEmployee(2)).toBeInstanceOf(Promise);
        return expect(getEmployee(2)).resolves.toStrictEqual({id: 2, name: 'Bill Gates'});
    });
    test(`Comprova que getEmployee torna una Promise, i que la promise es resol amb el valor esperat`, () => {
        expect(getSalary(2)).toBeInstanceOf(Promise);
        return expect(getSalary(2)).resolves.toStrictEqual({id: 2, salary: 1000});
    });

})
