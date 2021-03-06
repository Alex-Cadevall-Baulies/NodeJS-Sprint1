const {
    sum,
    substract,
    multiply,
    divide
} = require('../app/entrega1-6-codi')
const {
    medalInfo,
    gotMedal,
    getSalary,
    getEmployee,
    namePlusSalary
} = require('../app/entrega1-3')
const {
    bookClubBooking,
    isBookClubFree
} = require('../app/entrega1-4')

//test entrega 1-6 (operacions)
describe("sum tests", () => {
    test("validate if sum works with numbers", () => {
        expect(sum([1, 1])).toBe(2)
    });
    test("validate if sum rejects letters", () => {
        expect(() => sum([1, "a"])).toThrow(`El array conté lletres`)
    })
    test("validate if sum rejects special characters", () => {
        expect(() => sum([1, "/"])).toThrow(`El array conté caràcters especials`)
    })
    test("validate if sum rejects array < 2", () => {
        expect(() => sum([1])).toThrow(`El array conté menys de dos nombres`)
    })
    test("validate if sum rejects null", () => {
        expect(() => sum([1, null])).toThrow(`El array conté un element Null`)
    })
    test("validate if sum rejects undefined", () => {
        expect(() => sum([1, undefined])).toThrow(`El array conté un element undefined`)
    })
})

describe("substract tests", () => {
    test("validate if substract works with numbers", () => {
        expect(substract([1, 1])).toBe(0)
    });
    test("validate if substract rejects letters", () => {
        expect(() => substract([1, "a"])).toThrow(`El array conté lletres`)
    })
    test("validate if substract rejects special characters", () => {
        expect(() => substract([1, "/"])).toThrow(`El array conté caràcters especials`)
    })
    test("validate if substract rejects array < 2", () => {
        expect(() => substract([1])).toThrow(`El array conté menys de dos nombres`)
    })
    test("validate if substract rejects null", () => {
        expect(() => substract([1, null])).toThrow(`El array conté un element Null`)
    })
    test("validate if substract rejects undefined", () => {
        expect(() => substract([1, undefined])).toThrow(`El array conté un element undefined`)
    })
})

describe("divide tests", () => {
    test("validate if divide works with numbers", () => {
        expect(divide([1, 1])).toBe(1)
    });
    test("validate if divide rejects letters", () => {
        expect(() => divide([1, "a"])).toThrow(`El array conté lletres`)
    })
    test("validate if divide rejects special characters", () => {
        expect(() => divide([1, "/"])).toThrow(`El array conté caràcters especials`)
    })
    test("validate if divide rejects array < 2", () => {
        expect(() => divide([1])).toThrow(`El array conté menys de dos nombres`)
    })
    test("validate if divide rejects null", () => {
        expect(() => divide([1, null])).toThrow(`El array conté un element Null`)
    })
    test("validate if divide rejects undefined", () => {
        expect(() => divide([1, undefined])).toThrow(`El array conté un element undefined`)
    })
})

describe("multiply tests", () => {
    test("validate if multiply works with numbers", () => {
        expect(multiply([1, 1])).toBe(1)
    });
    test("validate if multiply rejects letters", () => {
        expect(() => multiply([1, "a"])).toThrow(`El array conté lletres`)
    })
    test("validate if multiply rejects special characters", () => {
        expect(() => multiply([1, "/"])).toThrow(`El array conté caràcters especials`)
    })
    test("validate if multiply rejects array < 2", () => {
        expect(() => multiply([1])).toThrow(`El array conté menys de dos nombres`)
    })
    test("validate if multiply rejects null", () => {
        expect(() => multiply([1, null])).toThrow(`El array conté un element Null`)
    })
    test("validate if multiply rejects undefined", () => {
        expect(() => multiply([1, undefined])).toThrow(`El array conté un element undefined`)
    })
})

//test entrega 1-3 nivell 1 exercici 2
describe(`Comprova exercici 2 nivell 1, entrega 1-3`, () => {

    test(`comprova que medalInfo retorna el missatge correcte si false`, () => {
        expect(medalInfo(gotMedal, 'foc', 'Blaine', false)).toBe(`No has aconseguit la medalla tipus foc de Blaine. Blaine et diu que segueixis entrenant dur!`
        )
    });

    test(`comprova que medalInfo retorna el missatge correcte si true`, () => {
        expect(medalInfo(gotMedal, 'foc', 'Blaine', true)).toBe(`Has aconseguit la medalla tipus foc de Blaine!`)
    });

    test(`comprova que gotMedal retorna el missatge correcte si false`, () => {
        expect(gotMedal(false, 'planta de Erika', `Erika`)).toBe(`No has aconseguit la medalla tipus planta de Erika. Erika et diu que segueixis entrenant dur!`
        )
    });

    test(`comprova que gotMedal retorna el missatge correcte si true`, () => {
        expect(gotMedal(true, `planta de Erika`, `Erika`)).toBe(`Has aconseguit la medalla tipus planta de Erika!`
        )
    });
})

//test entrega 1-3 exercici 2 nivell 2
describe(`Comprova exercici 2 nivell 2, entrega 1-3`, () => {
    test("Comprova que namePlusSalary retorna la resposta correcta", async () => {
        return expect(await namePlusSalary(2)).toEqual(`El ID 2 correspon a Bill Gates amb salari 1000`)
    });

    test(`Comprova que getEmployee torna una Promise, i que la promise es resol amb el valor esperat`, () => {
        expect(getEmployee(2)).toBeInstanceOf(Promise);
        return expect(getEmployee(2)).resolves.toStrictEqual({
            id: 2,
            name: 'Bill Gates'
        });
    });

    test(`Comprova que getSalary torna una Promise, i que la promise es resol amb el valor esperat`, () => {
        expect(getSalary({
            id: 2,
            name: 'Bill Gates'
        })).toBeInstanceOf(Promise);
        return expect(getSalary({
            id: 2,
            name: 'Bill Gates'
        })).resolves.toStrictEqual({
            id: 2,
            salary: 1000
        });
    });

    test(`Comprova que getEmployee torna una Promise, i que la promise retorna el error esperat`, () => {
        return expect(getEmployee(6)).rejects.toEqual(`No hem trobat cap empleat amb el ID 6 a la nostra base de dades.`);
    });

    test(`Comprova que getEmployee torna una Promise, i que revisa si hi ha salary sense nom assignat`, () => {
        return expect(getEmployee(5)).rejects.toEqual(`El ID 5 no disposa de empleat pero sí d'un salari de 5000`);
    });

    test(`Comprova que getSalary torna una Promise, i que la promise retorna el error esperat`, () => {
        return expect(getSalary({
            id: 4,
            name: 'Lolita Worster'
        })).rejects.toEqual(`El empleat Lolita Worster no disposa de salari.`);
});
})

//test entrega 1-4 nivell 1 exercici 2 (Async / Await)
describe(`Comprova exercici 2 nivell 1, entrega 1-4`, () => {
    test("comprova que isBookClubFree retorna la resposta correcta", async () => {
        return expect(await isBookClubFree(true)).toEqual({
            name: 'Bilbo MC Swaggings',
            genre: 'fashion and design',
            location: 'right wing'
        })
    });

    test(`Comprova que bookClubBooking torna una Promise, i que la promise es resol amb el valor esperat`, () => {
        expect(bookClubBooking(true)).toBeInstanceOf(Promise);
        return expect(bookClubBooking(true)).resolves.toStrictEqual({
            name: 'Bilbo MC Swaggings',
            genre: 'fashion and design',
            location: 'right wing'
        });
    });

    test(`Comprova que bookClubBooking torna una Promise, i que la promise es rejected amb el valor esperat`, () => {
        return expect(bookClubBooking(false)).rejects.toEqual(`El club està reservat en aquests moments. Prova un altre horari.`);
    });

})

