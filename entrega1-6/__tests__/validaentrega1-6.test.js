const operation = require('../app/entrega1-6-codi.js')

test("number sum", () => {expect(operation.sum([1, 1])).toBe(2)})
test("letter sum", () => {expect(operation.sum([1, "a"])).toBe("1a")})

