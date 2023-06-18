import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [op, setOp] = useState();

  const handleNumberClick = (n) => {
    if (!num1) {
      setNum1(n);
      setDisplay(n);
    } else {
      setNum2(n);
      setDisplay((prev) => prev + n);
    }
  };

  const handleClearClick = () => {
    setDisplay(0);
    setNum1();
    setNum2();
  };

  const handleEqualsClick = () => {
    if (op === "+") {
      setDisplay(num1 + num2);
    } else if (op === "-") {
      setDisplay(num1 - num2);
    } else if (op === "*") {
      setDisplay(num1 * num2);
    } else if (op === "/") {
      setDisplay(num1 / num2);
    }
  };

  const handleOperatorClick = (o) => {
    setOp(o);
    setDisplay((prev) => prev + o);
  };
  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleNumberClick(7)}>7</button>
          <button onClick={() => handleNumberClick(8)}>8</button>
          <button onClick={() => handleNumberClick(9)}>9</button>
          <button onClick={() => handleOperatorClick("/")}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick(4)}>4</button>
          <button onClick={() => handleNumberClick(5)}>5</button>
          <button onClick={() => handleNumberClick(6)}>6</button>
          <button onClick={() => handleOperatorClick("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick(1)}>1</button>
          <button onClick={() => handleNumberClick(2)}>2</button>
          <button onClick={() => handleNumberClick(3)}>3</button>
          <button onClick={() => handleOperatorClick("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick(0)}>0</button>
          <button onClick={handleClearClick}>C</button>
          <button onClick={handleEqualsClick}>=</button>
          <button onClick={() => handleOperatorClick("+")}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
