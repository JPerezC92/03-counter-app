import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en <CounterApp />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe mostrar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el valor por defecto de 100", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe(value.toString());
  });

  test("debe de incrementar con el boton +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("12");
  });

  test("debe de disminuir con el boton -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("10");
  });

  test("debe de volver a su estado original con el boton reset", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    // console.log(wrapper.find("h2").html());
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("100");
  });
});
