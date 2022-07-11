const {sum, substract, multiply, divide} = require('../app/entrega1-6-codi')

describe ("Sum tests", () => {
test("validate if sum works with numbers", () => {expect(sum([1, 1])).toBe(2)});
test("validate if sum rejects letters", () => {expect(sum([1, "a"])).toThrow(`El array conté lletres`)})
test("validate if sum rejects special characters", () => {expect(sum([1, "/"])).toBe("1/")})
})
