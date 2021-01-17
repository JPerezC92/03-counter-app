import { render } from "@testing-library/react";
import { shallow } from "enzyme";
// import React from "react";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp />", () => {
  // test('Debe de mostrar el mensaje "Hola, soy Philip"', () => {
  //   const saludo = "Hola, soy Philip";
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  test("debe de mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola, soy Philip";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mosrar el subtitulo enviado por props", () => {
    const saludo = "Hola, soy Philip";
    const subtitulo = "Estoy aprendiendo React";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );
    const textoParrafo = wrapper.find("p").text();

    expect(textoParrafo).toBe(subtitulo);
  });
});
