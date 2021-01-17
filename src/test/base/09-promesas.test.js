import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas en el archivo 09-promesas", () => {
  test("getHeroeByIdAsync debe retornar un heroe async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(heroes[0]);
      done();
    });
  });

  test("getHeroeByIdAsync debe retornar error si el id no existe", (done) => {
    const id = 100;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toEqual("No se pudo encontrar el héroe");
      done();
    });
  });
});
