import React, { useState } from "react";
import "./Calculator.css"; // Import CSS for styling

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const clearExpression = () => {
    setExpression("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      if (!expression.trim()) {
        setResult("Error"); // Handle case when '=' is clicked without input
        return;
      }
      let res = eval(expression);
      setResult(res);
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={expression} readOnly />
      <div className="result">{result !== "" ? result : ""}</div>
      <div className="buttons">
        {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"].map(
          (char) => (
            <button
              key={char}
              onClick={() =>
                char === "C"
                  ? clearExpression()
                  : char === "="
                  ? calculateResult()
                  : handleClick(char)
              }
            >
              {char}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Calculator;
