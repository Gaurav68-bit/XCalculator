import React, { useState } from "react";
import "./Calculator.css"; // For styling

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const clearExpression = () => {
    setExpression("");
  };

  const calculateResult = () => {
    try {
      if (!expression) {
        setExpression("Error");
        return;
      }
      let result = eval(expression);
      if (result === Infinity) {
        setExpression("Infinity");
      } else if (isNaN(result)) {
        setExpression("NaN");
      } else {
        setExpression(result.toString());
      }
    } catch {
      setExpression("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={expression} readOnly />
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
