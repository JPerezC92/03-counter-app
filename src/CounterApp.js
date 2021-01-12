import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (e) => {
    setCounter(counter + 1);
    // setCounter((state) => state + 1);
  };
  const handleRemove = (e) => setCounter(counter - 1);
  const handleReset = (e) => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleRemove}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 11,
};

export default CounterApp;
