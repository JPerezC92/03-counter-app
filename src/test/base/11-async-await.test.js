import { getImagen } from "../../base/11-async-await";

describe("Pruebas en el archivo 11-async-await", () => {
  test("getImagen debe de retornar el url de la imagen", async () => {
    const url = await getImagen();

    expect(url.includes("https://")).toBe(true);
  });
});
