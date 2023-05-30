import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperation = (operation) => {
    let res;
    switch (operation) {
      case "+":
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        res = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        res = "";
    }
    setResult(res.toString());
  };

  return (
    <div className="calculator">
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />

      <div className="keypad">
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>*</button>
        <button onClick={() => handleOperation("/")}>/</button>
      </div>

      <div className="result">{result && <p>Result : {result}</p>}</div>
    </div>
  );
}

export default Calculator;
