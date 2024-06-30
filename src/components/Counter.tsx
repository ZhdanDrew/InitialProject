import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const counterOptions = [10, 20, 30, 40, 50, -50, -40, -30, -20, -10];

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const changeCounter = (newCount: number) => setCount(newCount);

  const resetCounter = () => {
    setCount(0);
  };

  useEffect(() => {
    console.log("Component Counter was inited");

    return () => {
      console.log("Component Counter will be removed");
    };
  }, []);

  useEffect(() => {
    if (count > 10) {
        setCount(0);
    }
    console.log(`Count has been changed: ${count}`);
  }, [count]);

   //  Завдання:
   //  Відсідковувати, коли count буде менше за 0
   //  У такому випадку - поверати його до значення 5 

  // useEffect deps:
  // [] - first render of the component
  // return () => {cleanup logic} - the latest render of the component
  // [anything from memory] - updates of described memory links   

  return (
    <div>
      <h2> Counter {count} </h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={resetCounter}>Reset</button>

      {counterOptions.map((countOption) => (
        <button key={countOption} onClick={() => changeCounter(countOption)}>
          {countOption}
        </button>
      ))}
    </div>
  );
};
