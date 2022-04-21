import React, { useState } from 'react'


const StateHook = () => {
  const [inputValue, setInputValue] = useState("Hello Kavitha");
  const [counter, setCounter] = useState(0);

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  let increment = () => {
    setCounter(counter + 1)
  }
  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
      <div>
        {counter}

        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default StateHook;