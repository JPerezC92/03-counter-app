import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en el archivo 07-deses-arr", () => {
  test("Debe de retornar un string y un numero", () => {
    const [letras, numeros] = retornaArreglo();
    const arr = retornaArreglo();

    // expect(arr).toEqual(["ABC", 123]);

    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});
