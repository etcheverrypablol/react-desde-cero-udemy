import React, { useState } from 'react';

const Events = () => {
  const clickEvent = () => {
    setText('Modified text');
  };

  const [text, setText] = useState('Text from state');

  return (
    <>
      <h2>{text}</h2>
      <button onClick={() => clickEvent()}>Click</button>
    </>
  );
};

export default Events;
