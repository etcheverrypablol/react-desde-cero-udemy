import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h2> Counter </h2>
      <h3> Our number increacing {counter}</h3>
      <button onClick={() => handleCounter()}>Increace</button>
    </div>
  );
};

export default Counter;
