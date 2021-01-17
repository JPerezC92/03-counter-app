import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en el archivo 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const nombre = "Peter";
    const user = getUsuarioActivo(nombre);

    const userTest = {
      uid: "ABC567",
      username: nombre,
    };

    expect(user).toEqual(userTest);
  });
});
