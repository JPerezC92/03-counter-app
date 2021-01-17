import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroesSource from "../../data/heroes";

describe("Pruebas en el archivo 08-imp-exp", () => {
  test("Debe de retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroesSource.find((heroe) => heroe.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("Debe de retornar undefined si heroe no existe", () => {
    const id = 100;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Debe de retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroesData = heroesSource.filter((h) => h.owner === owner);
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toEqual(heroesData);
  });

  test("Debe de retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroesData = heroesSource.filter((h) => h.owner === owner);
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(heroesData.length);
  });
});
