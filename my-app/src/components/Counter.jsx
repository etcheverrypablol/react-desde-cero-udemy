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
      <h4>{counter > 2 ? 'The counter is greater than 2' : 'The counter is less than 2'}</h4>
      <button onClick={() => handleCounter()}>Increace</button>
    </div>
  );
};

export default Counter;
