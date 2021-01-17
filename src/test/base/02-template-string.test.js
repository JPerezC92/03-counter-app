import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo debe de retornar hola fernando", () => {
    const nombre = "Fernando";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe(`Hola ${nombre}!`);
  });
  test("getSaludo debe de retornar hola Juan! sin ningun argumento", () => {
    const saludo = getSaludo();

    expect(saludo).toBe(`Hola Juan!`);
  });
});
