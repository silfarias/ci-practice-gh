import { suma, resta } from "../math.js";

test("suma correctamente", () => {
    expect(suma(2, 3)).toBe(5);
});

test("resta correctamente", () => {
    expect(resta(5, 3)).toBe(2);
});