const index = require("./index");


describe("Operações aritméticas", () => {
    test("Soma de dois números", () => {
        const result = index.add(3, 5);
        expect(result).toEqual(8);
    });

    test("Subtração de dois números", () => {
        const result = index.subtract(5,3);
        expect(result).toEqual(2);
    });

    test("Divisão de dois números", () => {
        const result = index.division(10, 5);
        expect(result).toEqual(2);
    });
    test("Multiplicação de dois números", () => {
        const result = index.multiplication(10, 5);
        expect(result).toEqual(50);
    });
});
