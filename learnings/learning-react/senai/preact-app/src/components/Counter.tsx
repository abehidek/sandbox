import { useState } from "preact/hooks";
import "../app.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [label, setLabel] = useState("0");

  const fizzBuzz = (operation: "+" | "-") => {
    let newValue;
    switch (operation) {
      case "+":
        newValue = count + 1;
        break;
      case "-":
        newValue = count - 1;
        break;
    }
    setCount(newValue);

    if (newValue == 0) setLabel("0");
    else if (newValue % 15 == 0) setLabel("FizzBuzz");
    else if (newValue % 5 == 0) setLabel("Buzz");
    else if (newValue % 3 == 0) setLabel("Fizz");
    else setLabel(`${newValue}`);
  };

  return (
    <>
      <div>
        <h1>Real count {count}</h1>
        <button
          onClick={() => {
            fizzBuzz("+");
          }}
        >
          +
        </button>
        <h1>{label}</h1>
        <button
          onClick={() => {
            fizzBuzz("-");
          }}
        >
          -
        </button>
      </div>
    </>
  );
}
