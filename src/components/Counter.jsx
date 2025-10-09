import React, { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);

  function incrementCount() {
    setCounter(count + 1);
  }

  function decrementCount() {
    if (count > 0) {
      setCounter(count - 1);
    }
  }

  return (
    <>
      <button onClick={incrementCount}>+</button>
      <p>{count}</p>
      <button onClick={decrementCount} disabled={count === 0}>-</button>
    </>
  );
};

export default Counter;
