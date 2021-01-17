import React from "react";
import PropTypes from "prop-types";

export const PrimeraApp = ({ saludo, subtitulo }) => {
  // const saludo = "Hola mundo";
  // const saludo = {
  //   nombre: "Philip",
  //   edad: 28,
  // };

  return (
    <>
      <h1>{saludo}!!!</h1>
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <p>{subtitulo}</p>
      {/* <p>Mi primera aplicacion</p> */}
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo",
};

export default PrimeraApp;
